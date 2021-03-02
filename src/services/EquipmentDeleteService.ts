import { getCustomRepository } from 'typeorm';

import { AppError } from '../Errors/AppError';

import EquipmentRepository from '../repositories/EquipmentsRepository';

interface EquipmentRequest {
  id: string
}

class EquipmentDeleteService {
  async execute({ id }: EquipmentRequest) {

    const equipmentsRepository = getCustomRepository(EquipmentRepository);

    const findEquipment = await equipmentsRepository.findOne(id);

    if(!findEquipment){
      throw new AppError('Not a result found');
    }

    await equipmentsRepository.remove(findEquipment);

    return;
  }
}

export default EquipmentDeleteService;