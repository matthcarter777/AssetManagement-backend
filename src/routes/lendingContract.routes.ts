import { Router } from 'express';

import LendingContractController from '../controllers/LendingContractController';

const lendingContractController = new LendingContractController();

const router = Router();

router.get('/', lendingContractController.index);
router.post('/', lendingContractController.create);
/* router.get('/:id', typeController.show);
router.put('/:id', typeController.update);
router.delete('/:id', typeController.delete);
 */
export default router;