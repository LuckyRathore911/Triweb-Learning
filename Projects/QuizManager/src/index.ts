import express from "express";
import mongoose from "mongoose"

import { userRouter } from './routes/userRouter'

const app = express();

const connectionString = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@triweb-cluster.bmmtese.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`

app.use(express.json())

app.use('/user', userRouter)

mongoose.connect(connectionString)
    .then(() => {
        app.listen(3000, () => {
            console.log("Server Connected!")
        })
    })
    .catch(error => {
        console.log("Error while connecting to the database: ", error);
        return;
    })

