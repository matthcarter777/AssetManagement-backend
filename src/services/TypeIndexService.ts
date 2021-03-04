import { getCustomRepository } from 'typeorm';

import TypesRepository from '../repositories/TypesRepository';

class TypeIndexService {
  async execute() {

    const typesRepository = getCustomRepository(TypesRepository);

    const type = typesRepository.find();

    return type;
  }

}

export default TypeIndexService;