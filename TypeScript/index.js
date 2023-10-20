const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(req.body);
});

app.listen(3000);
