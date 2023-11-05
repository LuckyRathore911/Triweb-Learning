import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken';
import QuizError from '../helpers/errorClass';

const isAuthenticated: RequestHandler = (req, res, next) => {

    try {
        let secretKey = process.env.JWT_SECRET_KEY || "";
        let decodedToken: { userId: string, iat: number, exp: number }
        const authHeader = req.get('Authorization');   //get the Authorization value from Header of get User API

        if (!authHeader) {
            const err = new QuizError("Not authenticated!");
            err.statusCode = 401;
            throw err;
        }
        const token = authHeader?.split(' ')[1]  // [0] is Bearer, [1] is the token from login

        if (!token || !secretKey) {
            const err = new QuizError("Not authenticated!");
            err.statusCode = 401;
            throw err;
        }
        decodedToken = <any>jwt.verify(token, secretKey)

        if (!decodedToken) {
            const err = new QuizError("Not authenticated!");
            err.statusCode = 401;
            throw err;
        }
        req.userId = decodedToken.userId;  //the user who has logged in

        next();  //executes the next middleware present: ("/:userId", isAuthenticated, getUser) in router
    } catch (error) {
        next(error);
    }
}
export default isAuthenticated;