const Blog = require("../models/blog");

//blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

//1- blog_index
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Alle Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

//2- blog_detailsUm, um einen einzelnen Blog zu erhalten :
const blog_details = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).render("404", { title: "Blog not found" });
    });
};

//3- blog_create_get: Erstellen der Seite für das Hauptformular
const blog_create_get = (req, res) => {
  res.render("create", { title: "Neuen Blog erstellen" });
};

//4- blog_create_post : Erstellen einen Blog oder Daten
const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

//5- blog_delete : Löschen einen Blog oder Daten
const blog_delete = (req, res) => {
    const id = req.params.id; //ID aus der Route erhalten
    Blog.findByIdAndDelete(id)
      .then((result) => {
        res.json({ redirect: "/blogs" });
      }) // Response in der Konsole anzeigen
      .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete
};
