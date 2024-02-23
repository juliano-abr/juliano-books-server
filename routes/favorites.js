const { Router } = require("express");
const {
  getFavorite,
  getFavorites,
  addFavorite,
  removeFavorite,
} = require("../controllers/favorites");

const router = Router();

router.get("/", getFavorites);

router.get("/:id", getFavorite);

router.post("/:id", addFavorite);

router.delete("/:id", removeFavorite);

module.exports = router;
