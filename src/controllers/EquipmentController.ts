import { Request, Response } from 'express';

import EquipmentIndexService from '../services/EquipmentIndexService';
import EquipmentCreateService from '../services/EquipmentCreateService';
import EquipmentShowService from '../services/EquipmentShowService';
import EquipmentUpdateService from '../services/EquipmentUpdateService';
import EquipmentDeleteService from '../services/EquipmentDeleteService';


class TypeController {
  async index(request: Request, response: Response) {
    const equipmentIndexService = new EquipmentIndexService();

    const equipment = await equipmentIndexService.execute();

    return response.status(201).json(equipment);
  }

  async create(request: Request, response: Response) {
    const { 
      description,
      identification,
      type_id, } = request.body;

    const equipmentIndexService = new EquipmentCreateService();
    
    const equipment = await equipmentIndexService.execute({
      description,
      identification,
      type_id
    });
    
    return response.status(201).json(equipment);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const equipmentShowService = new EquipmentShowService();

    const findEquipment = await equipmentShowService.execute({id});

    return response.status(200).json(findEquipment);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { description, identification, type_id } = request.body;

    const equipmentUpdateService = new EquipmentUpdateService();

    const findEquipment = await equipmentUpdateService.execute({ 
      id, 
      description, 
      identification, 
      type_id 
    });

    return response.status(200).json(findEquipment);
  }
 
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const equipmentDeleteService = new EquipmentDeleteService()

    await equipmentDeleteService.execute({id});

    return response.status(200).json({
      message: 'Equipment deleted!'
    });
  } 
}

export default TypeController;