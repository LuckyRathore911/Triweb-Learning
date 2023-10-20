const { addUserToDB } = require("../models/userModel");

const register = (req, res) => {
  uname = "Lucky";
  password = "1234";
  let result = addUserToDB(uname, password);
  res.send(result);
};

module.exports = { register };
