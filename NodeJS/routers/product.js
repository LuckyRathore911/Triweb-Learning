const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router.post("/add", productController.addproduct);
router.post("/get", productController.getproduct);
router.post("/update", productController.updateproduct);
router.post("/delete", productController.deleteproduct);

module.exports = router;
