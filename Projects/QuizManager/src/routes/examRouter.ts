import express from 'express'

import { startExam, submitExam } from '../controllers/examController';
import isAuthenticated from '../middlewares/isAuthenticated';

const examRouter = express.Router();

examRouter.get('/:quizId', isAuthenticated, startExam)
examRouter.post('/', isAuthenticated, submitExam)

export default examRouter;