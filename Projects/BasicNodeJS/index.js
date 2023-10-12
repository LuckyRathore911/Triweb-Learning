const express = require("express");
require("dotenv").config();

const testRouter = require("./testRouter");

const app = express();
app.use(express.json());

app.use("/test", testRouter);

app.listen(3000);
