const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./productModel");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/product", async (req, res) => {
  try {
    await Product.create(req.body);
    res.send({ status: "success" }); //send to fetch on frontend
  } catch (error) {
    console.log(error.message);
    res.send({ status: "error", message: error.message });
  }
});

app.get("/product", async (req, res) => {
  try {
    console.log("Infinite Loop");
    const products = await Product.find({});
    res.send({ status: "success", data: products }); //send to fetch on frontend
  } catch (error) {
    console.log(error.message);
    res.send({ status: "error", message: error.message });
  }
});

mongoose
  .connect(process.env.connection_string)
  .then(() => {
    app.listen(3002, () => {
      console.log("Server Connected!");
    });
  })
  .catch((error) => {
    console.log("Error while connecting to the database: ", error);
    return;
  });
