import { Router } from 'express';

import DashboardController from '../controllers/DashboardController';

const dashboardRouter = Router();
const dashboardController = new DashboardController();

dashboardRouter.get('/', dashboardController.index);

export default dashboardRouter;