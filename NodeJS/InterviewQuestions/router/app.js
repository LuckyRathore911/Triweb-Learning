const express = require("express");
const router = require("./user-router");

const app = express();

//middleware
app.use((req, res, next) => {
  console.log("Hi there!");
  next();
});

app.use("/user", router);

app.listen(3000);
