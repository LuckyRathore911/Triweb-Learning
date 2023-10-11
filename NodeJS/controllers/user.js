const userModel = require("../models/user");

module.exports.register = async (req, res) => {
  let insertId = await userModel.createUser(req.body);
  if (insertId > 0) {
    res.send({ status: "success", data: { id: insertId } });
  } else {
    res.send({ status: "failure", message: "User registration failed!" });
  }
};

module.exports.retrieve = async (req, res) => {
  let data = await userModel.getUser(req.body);
  if (data) {
    res.send({ status: "success", data: data });
  } else {
    res.send({ status: "failure", message: "User not found!" });
  }
};

module.exports.update = async (req, res) => {
  let isUpdated = await userModel.updateUser(req.body);
  if (isUpdated) {
    res.send({ status: "success", message: "Updated the user successfully!" });
  } else {
    res.send({ status: "failure", message: "Error updating the user!" });
  }
};

module.exports.delete = async (req, res) => {
  let isDeleted = await userModel.deleteUser(req.body);
  if (isDeleted) {
    res.send({ status: "success", message: "Deleted the user successfully!" });
  } else {
    res.send({ status: "failure", message: "Error deleting the user!" });
  }
};
