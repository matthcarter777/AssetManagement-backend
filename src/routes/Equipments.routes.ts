import { Router } from 'express'; 


const routes = Router();


routes.post('/', (req, res) => {
    res.status(200).send('Welcome to Equipments');
});

export default routes;
