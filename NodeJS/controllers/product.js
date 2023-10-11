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
