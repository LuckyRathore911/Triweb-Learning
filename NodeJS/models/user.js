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

module.exports.getUser = async (userData) => {
  let returnData = "";
  try {
    let query = "select * from userNodeJS where id=?";
    let result = await database.execute(query, [userData.id]);
    returnData = result[0][0];
    console.log(returnData);
  } catch (error) {
    console.log(error);
  }
  return returnData;
};

module.exports.updateUser = async (userData) => {
  try {
    let query = "update userNodeJS set password=? where id=?";
    await database.execute(query, [userData.password, userData.id]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports.deleteUser = async (userData) => {

  try {
    let query = "delete from userNodeJS where id=?";
    await database.execute(query, [userData.id]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
