import express from "express";

import { register, updateUser } from "../controllers/userController";

const router = express.Router();

router.post("/register", register);
router.post("/update", updateUser);

export default router;
