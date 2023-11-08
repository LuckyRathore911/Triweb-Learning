const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/product", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3002);
