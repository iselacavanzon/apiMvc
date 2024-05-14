const express = require("express");
const router = express.Router();

const controller = require("../controllers/BooksController");

router.get("/bookList", controller.getBookList);
router.get("/path", controller.getPath);

module.exports = router;
