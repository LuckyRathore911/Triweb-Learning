import { NextFunction, Request, Response } from "express";

import { User } from "../models/userModel";

interface ResponseFormat {
    status: "success" | "error";
    data: {};
    message: string;
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {

    let response: ResponseFormat;

    try {
        if (req.userId != req.params.userId) {
            throw new Error("Not authorized!");
        }

        const userId = req.params.userId; // userId in params refers to userId in '/:userId'
        const user = await User.findById(userId, { name: 1, email: 1 }); // to fetch name and email only

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
        next(error);  // redirecting the error to the error route
    }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {

    let response: ResponseFormat;

    try {
        if (req.userId != req.body._id) {
            throw new Error("Not authorized!");
        }

        const userId = req.body._id;
        const user = await User.findById(userId); //find the user in DB
        user!.name = req.body.name; // update the name

        /* !. is a non-null assertion operator that says that we know the user is not null
            otherwise there was this error: 'user' is possibly 'null'.*/

        await user?.save();

        response = {
            status: "success",
            data: {},
            message: "Updated the User:)",
        };
        res.send(response);

    } catch (error) {
        // response = {
        //     status: "error",
        //     data: {},
        //     message: "Something Went Wrong!",
        // };
        // console.log(error)
        // res.status(500).send(response);
        next(error); // redirecting the error to the error route
    }
};

export { getUser, updateUser };
