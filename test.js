const fs = require("fs");

const currentData = JSON.parse(fs.readFileSync("books.json"));
fs.writeFileSync(
  "books.json",
  JSON.stringify([
    ...currentData,
    { id: currentData.length + 1, name: `Book ${currentData.length + 1}` },
  ])
);

console.log(JSON.parse(fs.readFileSync("books.json")));
