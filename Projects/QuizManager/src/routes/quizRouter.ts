import express from 'express'

import { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz } from '../controllers/quizController';
import isAuthenticated from '../middlewares/isAuthenticated';

const quizRouter = express.Router();

quizRouter.post("/", isAuthenticated, createQuiz)
quizRouter.get("/:quizId", isAuthenticated, getQuiz)
quizRouter.put("/", isAuthenticated, updateQuiz)
quizRouter.delete("/:quizId", isAuthenticated, deleteQuiz)
quizRouter.patch("/", isAuthenticated, publishQuiz)

export default quizRouter