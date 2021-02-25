import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import TypesRepository from '../repositories/TypesRepository';

class TypeController {
  async index(request: Request, respose: Response) {
    const typesRepository = getCustomRepository(TypesRepository);

    const findType = await typesRepository.find({});

    if(!findType){
      return respose.status(400).json({error: 'Not a result found'});
    }

    return respose.status(201).json(findType);
  }

  async create(request: Request, respose: Response) {
    const { name } = request.body;

    const typesRepository = getCustomRepository(TypesRepository);

    const type = typesRepository.create({
      name
    });

    await typesRepository.save(type);
    
    return respose.status(201).json(type);
  }
}

export default TypeController;