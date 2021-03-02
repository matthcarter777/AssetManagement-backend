import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';


import EquipmentIndexService from '../services/EquipmentIndexService';
import EquipmentCreateService from '../services/EquipmentCreateService';

class TypeController {
  async index(request: Request, response: Response) {
    const equipmentIndexService = new EquipmentIndexService();

    const equipment = await equipmentIndexService.execute();

    return response.status(201).json(equipment);
  }

  async create(request: Request, respose: Response) {
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
    
    return respose.status(201).json(equipment);
  }

  /* async show(request: Request, respose: Response) {
    const { id } = request.params;

    const typesRepository = getCustomRepository(TypesRepository);

    const findType = await typesRepository.findOne(id);

    if(!findType){
      return respose.status(400).json({error: 'Not a result found'});
    }


    return respose.status(200).json(findType);
  }

  async update(request: Request, respose: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const typesRepository = getCustomRepository(TypesRepository);

    const findType = await typesRepository.findOne(id);

    if(!findType){
      return respose.status(400).json({error: 'Not a result found'});
    }

    findType.name = name;

    await typesRepository.save(findType);

    return respose.status(200).json(findType);
  }

  async delete(request: Request, respose: Response) {
    const { id } = request.params;

    const typesRepository = getCustomRepository(TypesRepository);

    const findType = await typesRepository.findOne(id);

    if(!findType){
      return respose.status(400).json({error: 'Not a result found'});
    }

    await typesRepository.remove(findType);

    return respose.status(200).json({
      message: 'Type deleted!'
    });
  } */
}

export default TypeController;