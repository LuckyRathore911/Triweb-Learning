import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';


const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    try {
        let secretKey = process.env.JWT_SECRET_KEY || "";
        let decodedToken: { userId: string, iat: number, exp: number }
        const authHeader = req.get('Authorization');   //get the Authorization value from Header of get User API

        if (!authHeader) {
            throw new Error("Not Authenticated! No authorization header found!")
        }
        const token = authHeader?.split(' ')[1]  // [0] is Bearer, [1] is the token from login

        if (!token || !secretKey) {
            throw new Error("Not Authenticated!")
        }
        decodedToken = <any>jwt.verify(token, secretKey)

        if (!decodedToken) {
            throw new Error("Not Authenticated! decodedToken not found!")
        }
        req.userId = decodedToken.userId;  //the user who has logged in

        next();  //executes the next middleware present: ("/:userId", isAuthenticated, getUser) in router
    } catch (error) {
        next(error);
    }
}
export default isAuthenticated;