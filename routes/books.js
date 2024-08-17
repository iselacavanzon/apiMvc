const express = require("express");
const router = express.Router();

const { getBookById } = require("../controllers/BooksController");

const controller = require("../controllers/BooksController");

router.get("/bookList", controller.getBookList);
router.get("/path", controller.getPath);
router.get("/bookList/:id", controller.getBookById);

module.exports = router;
