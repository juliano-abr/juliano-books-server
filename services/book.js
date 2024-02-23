const fs = require("fs");

function getAllBooks() {
  const books = JSON.parse(fs.readFileSync("books.json"));
  return books;
}

function getBookById(id) {
  const books = JSON.parse(fs.readFileSync("books.json"));
  const filteredBook = books.find((book) => book.id === Number(id));
  return filteredBook;
}

function createNewBook(newBook) {
  const currentData = JSON.parse(fs.readFileSync("books.json"));
  const newBookList = [...currentData, newBook];
  fs.writeFileSync("books.json", JSON.stringify(newBookList));
  return true;
}

function changeBookById(id, changes) {
  const currentData = JSON.parse(fs.readFileSync("books.json"));
  const changedIndex = currentData.findIndex((book) => book.id === Number(id));

  const changedData = { ...currentData[changedIndex], ...changes };
  currentData[changedIndex] = changedData;
  fs.writeFileSync("books.json", JSON.stringify(currentData));
  return true;
}

function deleteBookById(id) {
  const currentData = JSON.parse(fs.readFileSync("books.json"));
  const deletedIndex = currentData.findIndex((book) => book.id === Number(id));
  currentData.splice(deletedIndex, 1);
  fs.writeFileSync("books.json", JSON.stringify(currentData));
  return true;
}

module.exports = {
  getAllBooks,
  getBookById,
  createNewBook,
  changeBookById,
  deleteBookById,
};
