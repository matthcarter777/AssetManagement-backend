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

  async show(request: Request, respose: Response) {
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
  }
}

export default TypeController;