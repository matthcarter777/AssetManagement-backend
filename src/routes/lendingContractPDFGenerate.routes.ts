import { Router } from 'express';

import lendingContractGenerateDPFController from '../controllers/LendingContractGenerateDPFController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const lendingContractController = new lendingContractGenerateDPFController();

const router = Router();
router.use(ensureAuthenticated);

router.post('/:id', lendingContractController.create);
router.get('/:id', lendingContractController.show);

export default router;