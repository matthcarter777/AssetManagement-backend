import { Router } from 'express';

import DashboardController from '../controllers/DashboardController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const dashboardController = new DashboardController();
const router = Router();
router.use(ensureAuthenticated);

router.get('/', dashboardController.index);

export default router;
