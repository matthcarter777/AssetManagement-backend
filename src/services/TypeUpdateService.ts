import { AppError } from './../Errors/AppError';
import { getCustomRepository } from 'typeorm';

import TypesRepository from '../repositories/TypesRepository';

class TypeUpdateService {
  async execute(id: string, name: string) {

    const typesRepository = getCustomRepository(TypesRepository);

    const typeFind = await typesRepository.findById(id);

    if(!typeFind) {
      throw new AppError('Type not already exist!');
    };

    typeFind.name = name;

    await typesRepository.save(typeFind);

    return typeFind;
  }

}

export default TypeUpdateService;