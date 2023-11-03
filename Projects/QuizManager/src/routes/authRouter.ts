import express from "express";
import { body } from "express-validator";

import { userRegister, userlogin, doesUserExist } from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/", [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 4 })
        .withMessage('Please enter a valid name. [minimum 4 characters long]'),
    body("email")
        .trim()
        .isEmail()
        .custom(emailId => {
            return doesUserExist(emailId)
                .then(status => {
                    if (status) { 
                        return Promise.reject("User already exists!") 
                    }
                })
                .catch(err => {
                    return Promise.reject(err)
                });
        })
        .normalizeEmail()

], userRegister); // register user
authRouter.post("/login", userlogin); // login user

export { authRouter };