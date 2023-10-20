import express from "express";

import  router  from "./routes/userRouter";

const app = express();

app.use(express.json());

app.use("/user", router);

app.listen(process.env.PORT);
