import { getCustomRepository } from 'typeorm';

import { AppError } from '../Errors/AppError';

import EquipmentRepository from '../repositories/EquipmentsRepository';

interface EquipmentRequest {
  id: string
}

class EquipmentShowService {
  async execute({ id }: EquipmentRequest) {

    const equipmentRepository = getCustomRepository(EquipmentRepository);

    const equipment = await equipmentRepository.findById(id);

    if(!equipment) {
      throw new AppError('Equipment not already exist!');
    }

    return equipment;
  }
}

export default EquipmentShowService;