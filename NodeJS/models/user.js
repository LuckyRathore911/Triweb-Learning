const database = require("../util/database");

module.exports.createUser = async (userData) => {
  // console.log(userData);

  //table and column names are case insensitive
  let query = "INSERT INTO userNodeJS(name,email, PASSWORD) VALUES(?,?,?)";
  let id = 0;
  try {
    let result = await database.execute(query, [
      userData.name,
      userData.email,
      userData.password,
    ]);
    id = result[0].insertId;
  } catch (error) {
    console.log(error);
    return false;
  }

  // console.log("executed query");

  return id;
};
