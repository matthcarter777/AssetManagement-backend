import { Router } from 'express';

import TypeController from '../controllers/TypeController';

const typeController = new TypeController();

const router = Router();

router.get('/', typeController.index);
router.post('/', typeController.create);

export default router;