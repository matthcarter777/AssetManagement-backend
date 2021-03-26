import { AppError } from './../Errors/AppError';
import { getCustomRepository } from 'typeorm';

import TypesRepository from '../repositories/TypesRepository';

class TypeUpdateService {
  async execute(id: string, name: string) {

    const typesRepository = getCustomRepository(TypesRepository);

    const typeFind = await typesRepository.findById(id);
    const findTypeByName = await typesRepository.findByName(name);

    if(!typeFind) {
      throw new AppError('Type not already exist!');
    };

    if(findTypeByName) {
      throw new AppError('Type already exist!');
    };


    typeFind.name = name;

    await typesRepository.save(typeFind);

    return typeFind;
  }

}

export default TypeUpdateService;