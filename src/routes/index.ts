import { Router } from 'express';

import TypesRouter from '../routes/Types.routes';
import EquipmentsRouter from '../routes/Equipments.routes';

const routes = Router();

routes.use('/api/types', TypesRouter);
routes.use('/api/equipments', EquipmentsRouter);

routes.get('/', (req, res) => {
    res.status(200).send('Welcome to Assets Managements');
});

export default routes;