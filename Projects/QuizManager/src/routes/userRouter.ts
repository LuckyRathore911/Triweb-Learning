import express from "express";

import {  getUser, updateUser } from "../controllers/userController";

const userRouter = express.Router();

//get and update can only be done after authentication and authorization
userRouter.get("/:userId", getUser); // fetch details of a particular user
userRouter.put("/", updateUser); // update details of a particular user

export { userRouter };
