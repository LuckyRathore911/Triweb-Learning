import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    let secretKey = process.env.JWT_SECRET_KEY;
    let decodedToken

    const authHeader = req.get('Authorization');   //get the Authorization value from Header of get User API

    if (!authHeader) {
        throw new Error("Not Authenticated! No authorization header found!")
    }
    const token = authHeader?.split(' ')[1]  // [0] is Bearer, [1] is the token from login

    try {
        if (token && secretKey) {
            decodedToken = jwt.verify(token, secretKey)
        }
    } catch (error) {
        throw new Error("Not Authenticated! jwt verification exception!")
    }
    if (!decodedToken) {
        throw new Error("Not Authenticated! decodedToken not found!")
    }

    console.log(decodedToken)
    next();  //executes the next middleware present: ("/:userId", isAuthenticated, getUser) in router
}
export default isAuthenticated;