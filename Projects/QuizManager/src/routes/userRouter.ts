import express from "express";

import { userRegister, getUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/", userRegister); // register user
userRouter.get("/:userId", getUser); // fetch details of a particular user

export { userRouter };
