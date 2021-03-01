import { Router } from 'express';

import TypeController from '../controllers/TypeController';

const typeController = new TypeController();

const router = Router();

router.get('/', typeController.index);
router.post('/', typeController.create);
router.get('/:id', typeController.show);
router.put('/:id', typeController.update);
router.delete('/:id', typeController.delete);

export default router;