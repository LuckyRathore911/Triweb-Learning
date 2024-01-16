const User = require("./user-model");

module.exports.postUser = async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();

  res.send({ result, status: "success" });
};

module.exports.getUser = async (req, res) => {
  const user = await User.find({});
  res.send({ user });
};
