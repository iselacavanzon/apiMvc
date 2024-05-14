const express = require("express");
const app = express();

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
const books = require("./routes/books");

app.use("/", books);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
