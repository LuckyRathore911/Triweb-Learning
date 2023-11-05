import express from 'express'
import { body } from "express-validator";

import { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz } from '../controllers/quizController';
import isAuthenticated from '../middlewares/isAuthenticated';

const quizRouter = express.Router();

quizRouter.post("/", isAuthenticated, [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 10 })
        .withMessage('Please enter a valid name. [minimum 10 characters long]'),
    body('questions_list')
        .custom(questions_list => {
            if (questions_list.length == 0)
                return Promise.reject("There should be at least 1 question in the quiz!")
            return true;
        }),
    body('answers')
        .custom(answers => {
            if (Object.keys(answers).length == 0)
                return Promise.reject("Answers for the quiz should be included!")
            return true;
        })
], createQuiz)

quizRouter.get("/:quizId", isAuthenticated, getQuiz)

quizRouter.put("/", isAuthenticated, [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 10 })
        .withMessage('Please enter a valid name. [minimum 10 characters long]'),
    body('questions_list')
        .custom(questions_list => {
            if (questions_list.length == 0)
                return Promise.reject("There should be at least 1 question in the quiz!")
            return true;
        }),
    body('answers')
        .custom(answers => {
            if (Object.keys(answers).length == 0)
                return Promise.reject("Answers for the quiz should be included!")
            return true;
        })
], updateQuiz)

quizRouter.delete("/:quizId", isAuthenticated, deleteQuiz)

quizRouter.patch("/", isAuthenticated, publishQuiz)

export default quizRouter