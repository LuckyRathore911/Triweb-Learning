import express from "express";

import isAuthenticated from '../middlewares/isAuthenticated';
import { getUser, updateUser } from "../controllers/userController";

const userRouter = express.Router();

//get and update can only be done after authentication and authorization
userRouter.get("/:userId", isAuthenticated, getUser); // fetch details of a particular user
userRouter.put("/", isAuthenticated, updateUser); // update details of a particular user

export { userRouter };
