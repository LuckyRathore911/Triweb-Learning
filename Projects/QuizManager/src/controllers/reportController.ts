import { RequestHandler } from 'express';

import Report from '../models/reportModel';
import QuizError from '../helpers/errorClass';
import ResponseFormat from '../utils/responseInterface'

const getReport: RequestHandler = async (req, res, next) => {
    try {

        let report

        if (!!req.params.reportId) {

            const reportId = req.params.reportId
            report = await Report.findById(reportId);

            if (report!.userId.toString() !== req.userId) {
                const err = new QuizError("You are not authorized to see the report!")
                err.statusCode = 405;
                throw err;
            }
        } else {
            report = await Report.find({ userId: req.userId })
        }

        if (!report) {
            const err = new QuizError("Report not found!")
            err.statusCode = 404;
            throw err
        }

        const resp: ResponseFormat = { status: "success", data: report, message: "Report/s fetched successfully!" };
        res.status(201).send(resp);

        res.send(report)

    } catch (error) {
        next(error)
    }
}

export { getReport }