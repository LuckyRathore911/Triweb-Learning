import express from "express";

import { userRegister } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/", userRegister); // register user

export { userRouter };
