const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This is Your Hello World!!");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
