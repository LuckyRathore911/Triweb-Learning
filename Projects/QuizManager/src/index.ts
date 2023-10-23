import express from "express";
import mongoose from "mongoose"

import { userRouter } from './routes/userRouter'
import { authRouter } from './routes/authRouter'

const app = express();

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json())

//Redirect to a particular endpoint
app.use('/user', userRouter)
app.use('/auth', authRouter)

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

