import { RequestHandler } from 'express';
import { validationResult } from "express-validator/src/validation-result";

import Quiz from '../models/quizModel';
import QuizError from '../helpers/errorClass';
import ResponseFormat from '../utils/responseInterface'

const createQuiz: RequestHandler = async (req, res, next) => {
    try {
        const name = req.body.name;
        const questions_list = req.body.questions_list;
        const answers = req.body.answers;
        const created_by = req.userId;  //from isAuthenticated

        //validation
        const validationError = validationResult(req)
        if (!validationError.isEmpty()) {
            const err = new QuizError("Validation failed!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }

        const quiz = new Quiz({ name, questions_list, answers, created_by });
        const result = await quiz.save();

        const resp: ResponseFormat = { status: "success", data: { quizId: result._id }, message: "Quiz created successfully!" };
        res.status(201).send(resp);

    } catch (error) {
        next(error);
    }
}

const getQuiz: RequestHandler = async (req, res, next) => {
    try {
        const quizId = req.params.quizId;
        const quiz = await Quiz.findById(quizId, { name: 1, questions_list: 1, answers: 1, created_by: 1 }); //projection

        if (!quiz) {
            const err = new QuizError("Quiz Not Found!");
            err.statusCode = 404;
            throw err;
        }

        if (req.userId !== quiz.created_by.toString()) {
            const err = new QuizError("You are not Authorized!");
            err.statusCode = 403;
            throw err;
        }

        const resp: ResponseFormat = { status: "success", data: quiz, message: "This is the requested Quiz." };
        res.status(200).send(resp);

    } catch (error) {
        next(error);
    }
}

const updateQuiz: RequestHandler = async (req, res, next) => {
    try {
        const quizId = req.body._id;
        const quiz = await Quiz.findById(quizId);

        //validation
        const validationError = validationResult(req)
        if (!validationError.isEmpty()) {
            const err = new QuizError("Validation failed!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }

        if (!quiz) {
            const err = new QuizError("Quiz Not Found!");
            err.statusCode = 404;
            throw err;
        }

        if (req.userId !== quiz.created_by.toString()) {
            const err = new QuizError("You are not Authorized!");
            err.statusCode = 403;
            throw err;
        }

        if (quiz.is_published) {
            const err = new QuizError("You can not update a published quiz!");
            err.statusCode = 405;
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

const deleteQuiz: RequestHandler = async (req, res, next) => {
    try {
        const quizId = req.params.quizId;
        const quiz = await Quiz.findById(quizId);

        if (req.userId !== quiz!.created_by.toString()) {
            const err = new QuizError("You are not Authorized!");
            err.statusCode = 403;
            throw err;
        }

        if (quiz!.is_published) {
            const err = new QuizError("You can not delete a published quiz!");
            err.statusCode = 405;
            throw err;
        }

        await Quiz.deleteOne({ _id: quizId });

        const resp: ResponseFormat = { status: "success", data: {}, message: "Quiz deleted successfully!" };
        res.status(200).send(resp);

    } catch (error) {
        next(error);
    }
}

const publishQuiz: RequestHandler = async (req, res, next) => {
    try {
        const quizId = req.body.quizId;
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            const err = new QuizError("Quiz Not Found!");
            err.statusCode = 404;
            throw err;
        }

        if (req.userId !== quiz.created_by.toString()) {
            const err = new QuizError("You are not Authorized!");
            err.statusCode = 403;
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

