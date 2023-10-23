import express from "express";
import mongoose from "mongoose"

import { userRouter } from './routes/userRouter'

const app = express();

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json())

app.use('/user', userRouter)

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

