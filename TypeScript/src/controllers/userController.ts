import { Request, Response } from 'express'

import { addUserToDB, updateUserInDB } from "../models/userModel";

const register = (req: Request, res: Response) => {

  //:string or :number is not compulsory but lets us know what type of value is required to be sent
  let uname: string = "Lucky";
  let password: string = "Password1234";
  let age: number = 22;

  let result = addUserToDB(uname, password, age);
  res.send(result);
};

const updateUser = (req: Request, res: Response) => {

  type lockedState = "locked" | "unlocked";  //should be global
  const state: lockedState = 'locked';

  const myUser = {
    id: 4,
    name: "Lucky",
    password: "anyString",
    age: 33,
    isActive: true,
    isLocked: state,
    isTrue:0
  }
  const result = updateUserInDB(myUser);
  res.send(result);
}

export { register, updateUser };
