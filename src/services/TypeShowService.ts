import { AppError } from './../Errors/AppError';
import { getCustomRepository } from 'typeorm';

import TypesRepository from '../repositories/TypesRepository';

class TypeShowService {
  async execute(id: string) {

    const typesRepository = getCustomRepository(TypesRepository);

    const type = await typesRepository.findById(id);

    if(!type) {
      throw new AppError('Type not already exist!');
    };

    return type;
  }

}

export default TypeShowService;