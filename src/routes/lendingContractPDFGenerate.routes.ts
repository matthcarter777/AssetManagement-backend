import { Router } from 'express';

import lendingContractGenerateDPFController from '../controllers/LendingContractGenerateDPFController';

const lendingContractController = new lendingContractGenerateDPFController();

const router = Router();

router.post('/:id', lendingContractController.create);
router.get('/:id', lendingContractController.show);

export default router;