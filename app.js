const express = require("express");
const app = express();
const cors = require("cors");

const bookRouter = require("./routes/book");
const favoritesRouter = require("./routes/favorites");

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/books", bookRouter);
app.use("/favorites", favoritesRouter);

const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello Wordld!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
