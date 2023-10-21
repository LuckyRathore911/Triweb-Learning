import { Request, Response } from 'express'

import { addUserToDB } from "../models/userModel";

const register = (req: Request, res: Response) => {

  //:string or :number is not compulsory but lets us know what type of value is required to be sent
  let uname: string = "Lucky";
  let password: string = "Password1234";
  let age: number = 22;

  let result = addUserToDB(uname, password, age);
  res.send(result);
};

export default register;
