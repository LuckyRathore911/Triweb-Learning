//export the functions

module.exports.add=((req, res) => {
  var x = req.body.a;
  var y = req.body.b;
  res.send(`Sum= ${x + y}`);
});

module.exports.subtract=((req, res) => {
  x = req.body.a;
  y = req.body.b;
  res.send(`Subtraction= ${x - y}`);
});

module.exports.multiply=((req, res) => {
  x = req.body.a;
  y = req.body.b;
  res.send(`Multiplication= ${x * y}`);
});

module.exports.divide=((req, res) => {
  x = req.body.a;
  y = req.body.b;
  res.send(`Division= ${x / y}`);
});
