const database = require("../util/database");

module.exports.createUser = (userData) => {
  // console.log(userData);

  //table and column names are case insensitive
  let query = "INSERT INTO userNodeJS(name,email, PASSWORD) VALUES(?,?,?)";

  database.execute(query, [userData.name, userData.email, userData.password]);

  console.log("executed query");

  return true;
};
