const {
  getAllBooks,
  getBookById,
  createNewBook,
  changeBookById,
  deleteBookById,
} = require("../services/book");

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const book = getBookById(id);
      res.send(book || "Book not found");
    } else {
      res.status(422);
      res.send("Invalid ID");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function createBook(req, res) {
  try {
    const newBook = req.body;
    if (req.body.name) {
      createNewBook(newBook);
      res.status(201);
      res.send("Book created successfully");
    } else {
      res.status(422);
      res.send("Name field is required");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function changeBook(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const changes = req.body;
      changeBookById(id, changes);
      res.status(202);
      res.send("Book changed successfully");
    } else {
      res.status(422);
      res.send("Invalid ID");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deleteBookById(id);
      res.status(202);
      res.send("Book deleted successfully");
    } else {
      res.status(422);
      res.send("Invalid ID");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBooks,
  getBook,
  createBook,
  changeBook,
  deleteBook,
};
