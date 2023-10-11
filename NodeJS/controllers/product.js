const productModel = require("../models/product");

module.exports.addproduct = async (req, res) => {
  let result = await productModel.create(req.body);

  insertId = result.dataValues.id;

  if (insertId > 0) {
    res.send({ status: "success", data: { id: insertId } });
  } else {
    res.send({ status: "failure", message: "Failed to add the product!" });
  }
};

module.exports.getproduct = async (req, res) => {
  let productDetails = await productModel.findByPk(req.body.id);
  if (productDetails) {
    res.send({ status: "success", data: productDetails });
  } else {
    res.send({ status: "failure", message: "Product not found!" });
  }
};

module.exports.updateproduct = async (req, res) => {
  let productDetails = await productModel.findByPk(req.body.id);
  productDetails.remark = req.body.remark;
  isUpdated = await productDetails.save();

  if (isUpdated) {
    res.send({
      status: "success",
      message: "Updated the remark on the product successfully!",
    });
  } else {
    res.send({ status: "failure", message: "Error updating the product!" });
  }
};

module.exports.deleteproduct = async (req, res) => {
  let productDetails = await productModel.findByPk(req.body.id);
  isDeleted = await productDetails.destroy();

  if (isDeleted) {
    res.send({
      status: "success",
      message: "Deleted the product successfully!",
    });
  } else {
    res.send({ status: "failure", message: "Error deleting the product!" });
  }
};
