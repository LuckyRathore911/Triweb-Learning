const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "triweb_nodejs",
  process.env.USER,
  process.env.PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
