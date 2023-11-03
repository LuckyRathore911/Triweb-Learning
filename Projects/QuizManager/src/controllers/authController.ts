import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from "express-validator/src/validation-result";

import { User } from "../models/userModel";
import QuizError from '../helpers/errorClass';

interface ResponseFormat {
    status: "success" | "error";
    data: {} | [];
    message: string;
}

const userRegister = async (req: Request, res: Response, next: NextFunction) => {
    let response: ResponseFormat;
    try {
        //validation
        const validationError = validationResult(req)
        if (!validationError.isEmpty()) {
            const err = new QuizError("Validation failed!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }

        // using bcryptjs to encode password and sending all values to database.
        let name = req.body.name
        let email = req.body.email
        let passwordPlaintext = req.body.password

        let passwordHash = await bcrypt.hash(passwordPlaintext, 12)

        const user = new User({ name, email, password: passwordHash });

        const result = await user.save(); //data of the registered user

        if (result) {
            response = {
                status: "success",
                data: { userId: result._id },
                message: "Registered",
            };
            res.send(response);
        } else {
            const err = new QuizError("Not registered!");
            err.statusCode = 401;
            throw err;
        }
    } catch (error) {
        next(error);
    }
};

const userlogin = async (req: Request, res: Response, next: NextFunction) => {
    let response: ResponseFormat;
    try {

        let email = req.body.email;
        let password = req.body.password;

        const user = await User.findOne({ email }); //find user by email id

        if (!user) {
            const err = new QuizError("User does not exist!");
            err.statusCode = 401;
            throw err;
        }

        const arePasswordsEqual = await bcrypt.compare(password, user!.password)
        // compare input password with that existing in DB using bcryptjs

        if (arePasswordsEqual) {
            const token = jwt.sign({ userId: user!._id }, `${process.env.JWT_SECRET_KEY}`, { expiresIn: "1h" });
            //creating a token for user login session
            response = {
                status: "success",
                data: { token },
                message: "Logged In",
            };
            res.status(200).send(response);
        } else {
            const err = new QuizError("Credentials didn't match!");
            err.statusCode = 401;
            throw err;
        }
    }
    catch (error) {
        next(error);
    }
};

const doesUserExist = async(email: String) => {

    const user = await User.findOne({ email });
    if (!user) {
        return false;
    }
    return true;
}

export { userRegister, userlogin, doesUserExist };