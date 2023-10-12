module.exports.create = (req, res) => {
  try {
    console.log(req.body);
    res.send({ status: "success", data: req.body });
  } catch (error) {
    res.send({ status: "error", message: "Creation error!" });
  }
};

module.exports.retrieve = (req, res) => {
  try {
    console.log(req.body);
    res.send({ status: "success", data: req.body });
  } catch (error) {
    res.send({ status: "error", message: "Retrieval error!" });
  }
};

module.exports.update = (req, res) => {
  try {
    console.log(req.body);
    res.send({ status: "success", data: req.body });
  } catch (error) {
    res.send({ status: "error", message: "Updation error!" });
  }
};

module.exports.delete = (req, res) => {
  try {
    console.log(req.body);
    res.send({ status: "success", data: req.body });
  } catch (error) {
    res.send({ status: "error", message: "Deletion error!" });
  }
};
