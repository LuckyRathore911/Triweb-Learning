import { Request, Response } from 'express'

import {addUserToDB} from "../models/userModel";

const register = (req:Request, res:Response) => {
  let uname = "Lucky";
  let password = "1234";
  let result = addUserToDB(uname, password);
  res.send(result);
};

export default register;
