const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// Blog Routes
router.get("/", blogController.blog_index); //aber vorher muss es importiert werden

router.post("/", blogController.blog_create_post);

// Seite zum Erstellen eines neuen Blogs Route ("/blogs/create")
router.get("/create", blogController.blog_create_get);

//Variable erstellen
router.get("/:id", blogController.blog_details);

//Ein bestimmtes Blog oder Dokument durch einen Routenparameter löschen
//Ajax Res hier erhalten(Fetch API):
router.delete("/:id", blogController.blog_delete);

module.exports = router;
