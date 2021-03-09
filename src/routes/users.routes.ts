import { Router } from 'express';

import UserController from '../controllers/UserController';

const userController = new UserController();

const router = Router();

router.get('/', userController.index);
router.post('/', userController.create);
router.get('/:id', userController.show);
/* router.put('/:id', userController.update);
router.delete('/:id', userController.delete); */

export default router;