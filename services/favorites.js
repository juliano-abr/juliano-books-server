const fs = require("fs");
const { getBookById } = require("./book");

function getAllFavorites() {
  const favorites = JSON.parse(fs.readFileSync("favorites.json"));
  return favorites;
}

function getFavoriteById(id) {
  const favorites = JSON.parse(fs.readFileSync("favorites.json"));
  const filteredFavorite = favorites.find(
    (favorite) => favorite.id === Number(id)
  );
  return filteredFavorite;
}

function addFavoriteById(id) {
  const book = getBookById(id);
  const currentData = JSON.parse(fs.readFileSync("favorites.json"));
  const newFavoritesList = [...currentData, book];
  fs.writeFileSync("favorites.json", JSON.stringify(newFavoritesList));
  return true;
}

function deleteFavoriteById(id) {
  const currentData = JSON.parse(fs.readFileSync("favorites.json"));
  const deletedIndex = currentData.findIndex(
    (favorite) => favorite.id === Number(id)
  );
  if (deletedIndex >= 0) currentData.splice(deletedIndex, 1);
  fs.writeFileSync("favorites.json", JSON.stringify(currentData));
  return true;
}

module.exports = {
  getAllFavorites,
  getFavoriteById,
  deleteFavoriteById,
  addFavoriteById,
};
