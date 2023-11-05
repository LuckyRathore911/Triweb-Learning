import { Request, Response, NextFunction } from 'express';

import Report from '../models/reportModel';
import QuizError from '../helpers/errorClass';

interface ResponseFormat {
    status: "success" | "error";
    data: {} | [];
    message: string;
}

const getReport = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const report = await Report.findById(req.params.reportId)
        if (!report) {
            const err = new QuizError("Report not found!")
            err.statusCode = 404;
            throw err
        }
        if (report.userId.toString() !== req.userId) {
            const err = new QuizError("You are not authorized to see the report!")
            err.statusCode = 405;
            throw err;
        }
        const resp: ResponseFormat = { status: "success", data: report, message: "Report fetched successfully!" };
        res.status(201).send(resp);

        res.send(report)

    } catch (error) {
        next(error)
    }
}

export { getReport }