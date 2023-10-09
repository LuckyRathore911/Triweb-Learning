const userModel = require("../models/user");

module.exports.register = async (req, res) => {
  let insertId = await userModel.createUser(req.body);
  if(insertId>0){
    res.send({status:"success",data:{id:insertId}});
  }
  else{
    res.send({status:"failure",message:"User registration failed!"})
  }
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
