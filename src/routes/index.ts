import { Router } from 'express';

import typesRouter from './types.routes';

const router = Router();

router.use('/types', typesRouter);

export default router;