import { Request, Response, NextFunction } from 'express'

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    // throw new Error("error middleware")  //breaks whole code
    // return false   //does not send response
    // return Promise.reject("middleware error") //does not send response

    let isUserAuthenticated = true;

    if (isUserAuthenticated) {
        next();  //executes the next middleware present: ("/:userId", isAuthenticated, getUser) in router
    }
    else {
        throw new Error("User does not exist!")
    }
}
export default isAuthenticated;