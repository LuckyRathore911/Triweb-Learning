const { DataTypes } = require("sequelize");
const testModel = require("./testModel");

module.exports.create = async (req, res) => {
  try {
    let data = await testModel.create(req.body);
    res.send({ status: "success", data: { id: data.dataValues.id } });
  } catch (error) {
    res.send({ status: "error", message: "Creation error!" });
  }
};

module.exports.retrieve = async (req, res) => {
  try {
    let data = await testModel.findByPk(req.body.id);
    res.send({ status: "success", data: data.dataValues });
  } catch (error) {
    res.send({ status: "error", message: "Retrieval error!" });
  }
};

module.exports.update = async (req, res) => {
  try {
    let data = await testModel.findByPk(req.body.id);
    data.extraInfo = req.body.extraInfo;
    await data.save();
    res.send({ status: "success", data: "Updation successful!" });
  } catch (error) {
    res.send({ status: "error", message: "Updation error!" });
  }
};

module.exports.delete = async (req, res) => {
  try {
    let data = await testModel.findByPk(req.body.id);
    await data.destroy();
    res.send({ status: "success", data: "Deletion successful!" });
  } catch (error) {
    res.send({ status: "error", message: "Deletion error!" });
  }
};
