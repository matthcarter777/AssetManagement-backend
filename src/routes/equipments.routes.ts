import { Router } from 'express';

import EquipmentController from '../controllers/EquipmentController';

const router = Router();

const equipmentController = new EquipmentController();

router.get('/', equipmentController.index);
router.post('/', equipmentController.create);

export default router;