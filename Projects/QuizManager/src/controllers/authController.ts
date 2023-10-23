import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from "../models/userModel";

interface ResponseFormat {
    status: "success" | "error";
    data: {};
    message: string;
}

const userRegister = async (req: Request, res: Response) => {
    let response: ResponseFormat;
    try {

        // using bcryptjs to encode password and sending all values to database.
        let name = req.body.name
        let email = req.body.email
        let passwordPlaintext = req.body.password

        let passwordHash = await bcrypt.hash(passwordPlaintext, 12)

        const user = new User({ name, email, password: passwordHash });

        // const user = new User(req.body);

        const result = await user.save(); //data of the registered user

        if (result) {
            response = {
                status: "success",
                data: { userId: result._id },
                message: "Done",
            };
            res.send(response);
        } else {
            response = {
                status: "error",
                data: {},
                message: "Not done",
            };
            res.send(response);
        }
    } catch (error) {
        console.log(error)
        response = {
            status: "error",
            data: {},
            message: "Something Went Wrong",
        };
        res.status(500).send(response);
    }
};

const userlogin = async (req: Request, res: Response) => {
    let response: ResponseFormat;
    try {

        let email = req.body.email;
        let password = req.body.password;

        const user = await User.findOne({ email }); //find user by email id

        if (!user) {
            response = {
                status: "error",
                data: {},
                message: "No such user exists!",
            };
            res.status(401).send(response);
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
            response = {
                status: "error",
                data: {},
                message: "Credentials didn't match!",
            };
            res.status(401).send(response);
        }
    }
    catch (error) {
        console.log(error)
        response = {
            status: "error",
            data: {},
            message: "Something Went Wrong",
        };
        res.status(500).send(response);
    }
};

export { userRegister, userlogin };