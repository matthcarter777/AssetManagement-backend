import { Router } from 'express';

import EquipmentController from '../controllers/EquipmentController';

const router = Router();

const equipmentController = new EquipmentController();

router.get('/', equipmentController.index);
router.post('/', equipmentController.create);
router.get('/:id', equipmentController.show);
router.put('/:id', equipmentController.update);
router.delete('/:id', equipmentController.delete);

export default router;