import express from "express";
import { Request, Response, NextFunction } from 'express'

import mongoose from "mongoose"

import { userRouter } from './routes/userRouter'
import { authRouter } from './routes/authRouter'
import QuizError from './helpers/errorClass'

const app = express();

interface ResponseFormat {
    status: "success" | "error";
    data: {} | [];
    message: string;
}

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json())

declare global {
    namespace Express {
        interface Request {
            userId: String
        }
    }
}

//Redirect to a particular endpoint
app.use('/user', userRouter)
app.use('/auth', authRouter)

//error route
app.use((err: QuizError, req: Request, res: Response, next: NextFunction) => {
    let message: string;
    let statusCode: number;
    if (!!err.statusCode && err.statusCode < 500) {
        message = err.message;
        statusCode = err.statusCode;
    }
    else {
        message = "Something went wrong! Please try again later.";
        statusCode = 500;
    }
    let resp: ResponseFormat = { status: "error", message, data: {} }
    if (!!err.data) {
        resp.data = err.data;
    }
    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
})

mongoose.connect(connectionString)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server Connected!")
        })
    })
    .catch(error => {
        console.log("Error while connecting to the database: ", error);
        return;
    })

