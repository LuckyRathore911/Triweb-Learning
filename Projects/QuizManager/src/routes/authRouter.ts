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
        .custom((emailId:String) => {
            return doesUserExist(emailId)
                .then((status:Boolean) => {
                    if (status) {
                        return Promise.reject("User already exists!")
                    }
                })
                .catch(err => {
                    return Promise.reject(err)
                });
        })
        .normalizeEmail(),
    body("password")
        .trim()
        .isLength({ min: 8 })
        .withMessage("Enter at least 8 characters long password!"),
    body("confirm_password")
        .trim()
        .custom((value:String, { req }) => {
            if (value != req.body.password) {
                return Promise.reject("Passwords do not match!")
            }
            return true;
        })

], userRegister); // register user
authRouter.post("/login", userlogin); // login user

export { authRouter };