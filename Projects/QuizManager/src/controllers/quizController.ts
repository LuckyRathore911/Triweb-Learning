import { NextFunction, Request, Response } from 'express';

import Quiz from '../models/quizModel';

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

const getQuiz = (req: Request, res: Response) => { res.send(req.params.quizId) }

const updateQuiz = (req: Request, res: Response) => { res.send(req.body) }

const deleteQuiz = (req: Request, res: Response) => { res.send(req.params.quizId) }

const publishQuiz = (req: Request, res: Response) => { res.send(req.body) }

export { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz }