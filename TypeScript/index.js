const express = require("express");

const { router } = require("./routes/userRouter");

const app = express();

app.use(express.json());

app.use("/user", router);

app.listen(process.env.PORT);
