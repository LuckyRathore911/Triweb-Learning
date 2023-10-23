import express from "express";

import { userRegister, userlogin } from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/", userRegister); // register user
authRouter.post("/login", userlogin); // login user

export { authRouter };