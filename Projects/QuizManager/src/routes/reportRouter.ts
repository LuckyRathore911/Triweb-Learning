import express from 'express'

import { getReport } from '../controllers/reportController'
import isAuthenticated from '../middlewares/isAuthenticated'

const reportRouter = express.Router();

reportRouter.get('/:reportId?', isAuthenticated, getReport)  //variable parameter

export default reportRouter;