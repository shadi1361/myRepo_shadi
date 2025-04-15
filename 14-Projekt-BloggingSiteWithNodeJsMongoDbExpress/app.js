const express = require("express");
const morgan = require("morgan"); // Middleware importieren, um statische Dateien dem Projekt bekannt zu machen.
const mongoose = require("mongoose");
const { title } = require("process");
const blogRoutes = require("./routes/blogRoutes");

// Erstellen einer Express App
const app = express(); // app ist ein Objekt, das express() zurückgibt.

//Register view engine:
// Setzen der View-Engine auf EJS
app.set("view engine", "ejs"); // Hinweis: Alle EJS-Dateien sollten im "views"-Ordner liegen.

//Connect to MongoDB
// Firstly CONNECT TO Mongo DB by Mongoose with URL CONNECTION from MongoDB
const dbURI =
  "mongodb+srv://shadi:shadak1234@cluster0.xjfb7.mongodb.net/node-course?retryWrites=true&w=majority&appName=Cluster0";

// da diese funktioniert wie Asynchronous und ergibt uns promise, deshalb: mit .then :
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log("not connected"));

app.use(express.static("public")); // Middleware und static Dateien
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny")); // combined(the most detailed gives us), common, dev, short, tiny

// Hauptseite Routes ("/")
app.get("/", (req, res) => {
  //controller
  res.redirect("/blogs");
});

// About-Seite Route ("/about")
app.get("/about", (req, res) => {
  res.render("about", { title: "Über uns" });
});
/*
// Kontakt-Seite Route ("/contact")
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Kontakt" });
});
 */
//blog routes
app.use("/blogs", blogRoutes);

// 404-Fehler-Seite Route (falls keine der vorherigen Routen übereinstimmt)
app.use((req, res) => {
  res.status(404).render("404", { title: "404 - Seite nicht gefunden" });
});
