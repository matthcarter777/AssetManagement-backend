import { Router } from 'express';

import TypeController from '../controllers/TypeController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const typeController = new TypeController();

const router = Router();
router.use(ensureAuthenticated);

router.get('/', typeController.index);
router.post('/', typeController.create);
router.get('/:id', typeController.show);
router.put('/:id', typeController.update);
router.delete('/:id', typeController.delete);

export default router;