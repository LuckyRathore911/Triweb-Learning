import { Request, Response } from 'express';

import { User } from '../models/userModel'

const userRegister = (req: Request, res: Response) => {
    const user = new User(req.body)
    user.save();
    res.send(req.body) //to model

}

export { userRegister };