import { Router } from 'express';

import TypesController from '../controllers/TypesController';

const typesController = new TypesController();

const routes = Router();

routes.post('/', typesController.create);

export default routes;