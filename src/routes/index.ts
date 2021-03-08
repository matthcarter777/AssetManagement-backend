import { Router } from 'express';

import typesRouter from './Types.routes';
import equipmentsRouter from './equipments.routes';
import usersRouter from './users.routes';

const router = Router();

router.use('/types', typesRouter);
router.use('/equipments', equipmentsRouter);
router.use('/users', usersRouter);

export default router;