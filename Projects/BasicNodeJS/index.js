const express = require("express");

const testRouter = require("./testRouter");

const app = express();
app.use(express.json());

app.use("/test", testRouter);

app.listen(3000);
