const express = require("express");
const mongoose = require("mongoose");

const router = require("./user-router");

const app = express();
app.use(express.json());

app.use("/user", router);

//connect with mongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => app.listen(3000))
  .catch((err) => console.log(err.message));
