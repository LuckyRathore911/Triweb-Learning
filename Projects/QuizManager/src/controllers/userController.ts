import { Request, Response } from "express";

import { User } from "../models/userModel";

interface ResponseFormat {
    status: "success" | "error";
    data: {};
    message: string;
}

const userRegister = async (req: Request, res: Response) => {
    let response: ResponseFormat;
    try {
        const user = new User(req.body);
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
        response = {
            status: "error",
            data: {},
            message: "Something Went Wrong",
        };
        res.status(500).send(response);
    }
};

const getUser = async (req: Request, res: Response) => {
    let response: ResponseFormat;
    const userId = await req.params.userId; // userId in params refers to userId in '/:userId'
    const user = await User.findById(userId, { name: 1, email: 1 }); // to fetch name and email only
    try {
        if (user) {
            response = {
                status: "success",
                data: user,
                message: "Found the User:)",
            };
            res.send(response);
        } else {
            response = {
                status: "error",
                data: {},
                message: "User not found!",
            };
            res.send(response);
        }
    } catch (error) {
        response = {
            status: "error",
            data: {},
            message: "Something Went Wrong!",
        };
        // console.log(error);
        res.status(500).send(response);
    }
};

export { userRegister, getUser };
