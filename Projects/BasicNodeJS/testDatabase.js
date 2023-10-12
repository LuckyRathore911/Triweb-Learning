const sequelize = require("sequelize");

const seqDb = new sequelize(
  "triweb_nodejs",
  process.env.USER,
  process.env.PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = seqDb;
