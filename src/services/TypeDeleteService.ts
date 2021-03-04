import { AppError } from './../Errors/AppError';
import { getCustomRepository } from 'typeorm';

import TypesRepository from '../repositories/TypesRepository';

class TypeDeleteService {
  async execute(id: string) {

    const typesRepository = getCustomRepository(TypesRepository);

    const typeFind = await typesRepository.findById(id);

    if(!typeFind) {
      throw new AppError('Type not already exist!');
    };

    await typesRepository.remove(typeFind);

    return;
  }

}

export default TypeDeleteService;