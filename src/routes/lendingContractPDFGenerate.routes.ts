import { Router } from 'express';

import lendingContractGenerateDPFController from '../controllers/LendingContractGenerateDPFController';

const lendingContractController = new lendingContractGenerateDPFController();

const router = Router();

router.post('/', lendingContractController.create);

export default router;