import { Router } from 'express';

import UserController from '../controllers/UserController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userController = new UserController();

const router = Router();

//router.use(ensureAuthenticated)

router.get('/', userController.index);
router.post('/', userController.create);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;