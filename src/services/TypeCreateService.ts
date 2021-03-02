import { getCustomRepository } from 'typeorm';

import TypesRepository from '../repositories/TypesRepository';

class TypeCreateService {
  async execute(name: string) {

    const typesRepository = getCustomRepository(TypesRepository);

    const type = typesRepository.create({
      name
    });

    await typesRepository.save(type);

    return type;
  }

}

export default TypeCreateService;