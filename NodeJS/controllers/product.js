const productModel = require("../models/product");

module.exports.addproduct = async (req, res) => {
  try {
    let result = await productModel.create(req.body);
    res.send({ status: "success", data: { id: result.dataValues.id } });
  } catch (error) {
    res.send({ status: "failure", message: "Failed to add the product!" });
  }
};

module.exports.getproduct = async (req, res) => {
  try {
    let productDetails = await productModel.findByPk(req.body.id);
    res.send({ status: "success", data: productDetails });
  } catch (error) {
    res.send({ status: "failure", message: "Product not found!" });
  }
};

module.exports.updateproduct = async (req, res) => {
  try {
    let productDetails = await productModel.findByPk(req.body.id);
    productDetails.remark = req.body.remark;
    await productDetails.save();
    res.send({
      status: "success",
      message: "Updated the remark on the product successfully!",
    });
  } catch (error) {
    res.send({ status: "failure", message: "Error updating the product!" });
  }
};

module.exports.deleteproduct = async (req, res) => {
  try {
    let productDetails = await productModel.findByPk(req.body.id);
    await productDetails.destroy();
    res.send({
      status: "success",
      message: "Deleted the product successfully!",
    });
  } catch (error) {
    res.send({ status: "failure", message: "Error deleting the product!" });
  }
};
