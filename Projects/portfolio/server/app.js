const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("The server is running");
});

app.post("/contact-me", (req, res) => {
  console.log(req.body);
  res.send({});
});

app.listen(process.env.port);
