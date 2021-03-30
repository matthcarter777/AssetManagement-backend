import { Router } from 'express';

import EquipmentController from '../controllers/EquipmentController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const equipmentController = new EquipmentController();
const router = Router();
router.use(ensureAuthenticated);

router.get('/', equipmentController.index);
router.post('/', equipmentController.create);
router.get('/:id', equipmentController.show);
router.put('/:id', equipmentController.update);
router.delete('/:id', equipmentController.delete);

export default router;
