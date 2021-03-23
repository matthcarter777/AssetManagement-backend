import { Router } from 'express';

import LendingContractController from '../controllers/LendingContractController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const lendingContractController = new LendingContractController();

const router = Router();
router.use(ensureAuthenticated);

router.get('/', lendingContractController.index);
router.post('/', lendingContractController.create);
router.get('/:id', lendingContractController.show);
router.put('/:id', lendingContractController.update);
router.delete('/:id', lendingContractController.delete);

export default router;