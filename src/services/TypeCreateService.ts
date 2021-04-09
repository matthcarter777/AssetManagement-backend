import { AppError } from './../Errors/AppError';
import { getCustomRepository } from 'typeorm';

import TypesRepository from '../repositories/TypesRepository';

class TypeCreateService {
  async execute(name: string) {

    console.log(name);
    const typesRepository = getCustomRepository(TypesRepository);
    
    const findTypeByName = await typesRepository.findByName(name);
    console.log(findTypeByName);
    
    if( findTypeByName ) {
      throw new AppError('Type already exists!');
    }

    const type = typesRepository.create({
      name
    });

    await typesRepository.save(type);

    return type;
  }

}

export default TypeCreateService;