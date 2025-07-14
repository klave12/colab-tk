const { Router } = require("express");
const { createAuthor, getAuthor, getAuthors } = require("../controllers/author.controller");
const { createCategory } = require("../controllers/category.controller");
const { createBook } = require("../controllers/book.controller");
const router = Router();

router.post("/author", createAuthor);
router.get("/author", getAuthors);
router.get("/author/:id", getAuthor);

router.post("/category", createCategory);

router.post("/book", createBook);

module.exports = router;
