const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  database: "triweb_nodejs",
  user: process.env.USER,
  password: process.env.PASSWORD,
});

module.exports = pool.promise();
