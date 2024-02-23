const {
  getAllFavorites,
  getFavoriteById,
  deleteFavoriteById,
  addFavoriteById,
} = require("../services/favorites");

function getFavorites(req, res) {
  try {
    const favorites = getAllFavorites();
    res.send(favorites);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getFavorite(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const favorite = getFavoriteById(id);
      res.send(favorite || "Favorite not found");
    } else {
      res.status(422);
      res.send("Invalid ID");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function addFavorite(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      addFavoriteById(id);
      res.status(201);
      res.send("Favorite added successfully");
    } else {
      res.status(422);
      res.send("Invalid ID");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function removeFavorite(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deleteFavoriteById(id);
      res.status(202);
      res.send("Favorite deleted successfully");
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
  getFavorites,
  getFavorite,
  addFavorite,
  removeFavorite,
};
