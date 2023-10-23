import express from "express";

import { userRegister, getUser, updateUser, userlogin } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/", userRegister); // register user
userRouter.post("/login", userlogin); // register user
userRouter.get("/:userId", getUser); // fetch details of a particular user
userRouter.put("/", updateUser); // update details of a particular user

export { userRouter };
