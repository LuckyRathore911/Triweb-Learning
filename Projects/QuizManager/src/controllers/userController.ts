import { Request, Response } from "express";

import { User } from "../models/userModel";

interface ResponseFormat {
  status: "success" | "error";
  data: {};
  message: string;
}

const userRegister = async (req: Request, res: Response) => {
  let response: ResponseFormat;
  try {
    const user = new User(req.body);
    const result = await user.save(); //data of the registered user

    if (result) {
      response = {
        status: "success",
        data: { userId: result._id },
        message: "Done",
      };
      res.send(response);
    } else {
      response = {
        status: "error",
        data: {},
        message: "Not done",
      };
      res.send(response);
    }
  } catch (error) {
    response = {
      status: "error",
      data: {},
      message: "Something Went Wrong",
    };
    res.status(500).send(response);
  }
};

export { userRegister };
