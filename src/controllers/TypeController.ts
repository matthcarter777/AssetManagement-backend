import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import TypesRepository from '../repositories/TypesRepository';
import TypeCreateService from '../services/TypeCreateService';

class TypeController {
  async index(request: Request, response: Response) {
    const typesRepository = getCustomRepository(TypesRepository);

    const findType = await typesRepository.find({});

    if(!findType){
      return response.status(400).json({error: 'Not a result found'});
    }

    return response.status(201).json(findType);
  }

  async create(request: Request, response: Response) {
    const { name } = request.body;

    const typeCreateService = new TypeCreateService();
    
    const type = await typeCreateService.execute(name);
    
    return response.status(201).json(type);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const typesRepository = getCustomRepository(TypesRepository);

    const findType = await typesRepository.findOne(id);

    if(!findType){
      return response.status(400).json({error: 'Not a result found'});
    }


    return response.status(200).json(findType);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const typesRepository = getCustomRepository(TypesRepository);

    const findType = await typesRepository.findOne(id);

    if(!findType){
      return response.status(400).json({error: 'Not a result found'});
    }

    findType.name = name;

    await typesRepository.save(findType);

    return response.status(200).json(findType);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const typesRepository = getCustomRepository(TypesRepository);

    const findType = await typesRepository.findOne(id);

    if(!findType){
      return response.status(400).json({error: 'Not a result found'});
    }

    await typesRepository.remove(findType);

    return response.status(200).json({
      message: 'Type deleted!'
    });
  }
}

export default TypeController;