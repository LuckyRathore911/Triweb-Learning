const userModel = require("../models/user");

module.exports.register = (req, res) => {
  userModel.createUser(req.body);
  res.send(req.body.name);
};

module.exports.retrieve = (req, res) => {
  res.send(req.body);
};

module.exports.update = (req, res) => {
  res.send(req.body);
};

module.exports.delete = (req, res) => {
  res.send(req.body);
};
