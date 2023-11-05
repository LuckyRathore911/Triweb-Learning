import { NextFunction, Request, Response } from "express";

import Quiz from '../models/quizModel';
import QuizError from '../helpers/errorClass';
import Report from "../models/reportModel";

interface ResponseFormat {
    status: "success" | "error";
    data: {} | [];
    message: string;
}

const startExam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.params.quizId
        const quiz = await Quiz.findById(quizId, { name: 1, questions_list: 1, is_published: 1 });
        if (!quiz) {
            const err = new QuizError("Quiz not found!");
            err.statusCode = 404;
            throw err;
        }

        if (!quiz.is_published) {
            const err = new QuizError("Cannot attempt an unpublished quiz!");
            err.statusCode = 405;
            throw err;
        }

        const resp: ResponseFormat = { status: "success", data: quiz, message: "Quiz!" };
        res.status(200).send(resp);

    } catch (error) {
        next(error)
    }
}

const submitExam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.body.quizId
        const attempted_questions = req.body.attempted_questions

        const quiz = await Quiz.findById(quizId, { answers: 1 })
        const answers = quiz?.answers;

        const allQuestions = Object.keys(answers);  //all question numbers

        const userId = req.userId;
        const maximum_score = allQuestions.length;  //total number of questions

        let score = 0;

        for (let i = 0; i < maximum_score; i++) {
            let question_number = allQuestions[i];
            if (!!attempted_questions[question_number] && answers[question_number] == attempted_questions[question_number]) {
                score++;
            }
        }

        const report = new Report({ userId, quizId, score, maximum_score })
        const data = await report.save();

        const resp: ResponseFormat = {
            status: "success",
            data: { maximum_score, score, reportId: data._id },
            message: "Quiz attempted successfully!"
        };
        res.status(200).send(resp);

    } catch (error) {
        next(error);
    }
}

export { startExam, submitExam }