const User = require("./user-model");

module.exports.postUser = async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();

  res.send({ result, status: "success" });
};

module.exports.getUser = async (req, res) => {
  const user = await User.find({});
  const user2 = await User.find({}, { userName: 1, _id: 0 }); //Projection

  res.send({ user, user2 });
};
