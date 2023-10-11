const { Sequelize } = require("sequelize");
const database = require("../util/productDB");

//model name as 'product' means database will be 'products'
const product = database.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  remark: Sequelize.STRING,
});

module.exports = product;
