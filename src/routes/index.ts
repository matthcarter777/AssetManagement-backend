import { Router } from 'express';

import typesRouter from './types.routes';
import equipmentsRouter from './equipments.routes';

const router = Router();

router.use('/types', typesRouter);
router.use('/equipments', equipmentsRouter);

export default router;