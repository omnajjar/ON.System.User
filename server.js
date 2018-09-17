require("dotenv").config({
  path: process.env.NODE_ENV === "dev" ? "./dev.env" : "./prod.env"
});
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
// load routes
const usersRouteHandler = require("./routes/api/users");
const profileRouteHandler = require("./routes/api/profile");
const postsRouteHandler = require("./routes/api/posts");

// BodyParser  middelware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use("/api/users", usersRouteHandler);
app.use("/api/profile", profileRouteHandler);
app.use("/api/posts", postsRouteHandler);

mongoose
  .connect(
    process.env.DB_URL,
    {
      useNewUrlParser: true,
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD
    }
  )
  .then(() => {
    console.log(`Connected to DB [env:${process.env.NODE_ENV}] successfully!`);
  })
  .catch(error => {
    console.log(error.message);
  });

app.get("/", (req, res) => {
  res.send("This is Your Hello World!!");
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
