import express from "express";

import { userRegister, getUser, updateUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/", userRegister); // register user
userRouter.get("/:userId", getUser); // fetch details of a particular user
userRouter.put("/", updateUser); // update details of a particular user

export { userRouter };
