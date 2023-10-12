const { Sequelize } = require("sequelize");
const database = require("./testDatabase");

const model = database.define("test", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  remark: Sequelize.STRING,
  extraInfo: Sequelize.STRING,
});

module.exports = model;
