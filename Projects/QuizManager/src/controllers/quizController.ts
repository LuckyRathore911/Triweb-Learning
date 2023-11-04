import { NextFunction, Request, Response } from 'express';

import Quiz from '../models/quizModel';
import QuizError from '../helpers/errorClass';

interface ResponseFormat {
    status: "success" | "error";
    data: {} | [];
    message: string;
}

const createQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const name = req.body.name;
        const questions_list = req.body.questions_list;
        const answers = req.body.answers;
        const created_by = req.userId;  //from isAuthenticated

        const quiz = new Quiz({ name, questions_list, answers, created_by });
        const result = await quiz.save();

        const resp: ResponseFormat = { status: "success", data: { quizId: result._id }, message: "Quiz created successfully!" };
        res.status(201).send(resp);

    } catch (error) {
        next(error);
    }
}

const getQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.params.quizId;
        const quiz = await Quiz.findById(quizId, { name: 1, questions_list: 1, answers: 1 }); //projection

        if (!quiz) {
            const err = new QuizError("Quiz Not Found!");
            err.statusCode = 404;
            throw err;
        }

        const resp: ResponseFormat = { status: "success", data: quiz, message: "This is the requested Quiz." };
        res.status(200).send(resp);

    } catch (error) {
        next(error);
    }
}

const updateQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.body._id;
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            const err = new QuizError("Quiz Not Found!");
            err.statusCode = 404;
            throw err;
        }

        quiz.name = req.body.name
        quiz.questions_list = req.body.questions_list
        quiz.answers = req.body.answers
        await quiz.save();

        const resp: ResponseFormat = { status: "success", data: {}, message: "Quiz updated successfully!" };
        res.status(200).send(resp);

    }
    catch (error) {
        next(error);
    }
}

const deleteQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.params.quizId;
        await Quiz.deleteOne({ _id: quizId });

        const resp: ResponseFormat = { status: "success", data: {}, message: "Quiz deleted successfully!" };
        res.status(200).send(resp);

    } catch (error) {
        next(error);
    }
}

const publishQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.body.quizId;
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            const err = new QuizError("Quiz Not Found!");
            err.statusCode = 404;
            throw err;
        }

        quiz.is_published = true;
        await quiz.save();

        const resp: ResponseFormat = { status: "success", data: {}, message: "Quiz Published!" };
        res.status(200).send(resp);

    } catch (error) {
        next(error);
    }
}

export { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz }
