const { Router } = require("express");
const {
  getBooks,
  getBook,
  createBook,
  changeBook,
  deleteBook,
} = require("../controllers/book");

const router = Router();

router.get("/", getBooks);

router.get("/:id", getBook);

router.post("/", createBook);

router.patch("/:id", changeBook);

router.delete("/:id", deleteBook);

module.exports = router;
