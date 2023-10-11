const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router.post("/add", productController.addproduct);

module.exports = router;
