import { Router } from 'express';

import typesRouter from './types.routes';
import equipmentsRouter from './equipments.routes';
import usersRouter from './users.routes';
import lendingContractRouter from './lendingContract.routes';

const router = Router();

router.use('/types', typesRouter);
router.use('/equipments', equipmentsRouter);
router.use('/users', usersRouter);
router.use('/contracts', lendingContractRouter);

export default router;