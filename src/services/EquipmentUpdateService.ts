import { getCustomRepository } from 'typeorm';

import { AppError } from '../Errors/AppErro';

import EquipmentRepository from '../repositories/EquipmentsRepository';

interface EquipmentRequest {
  id: string,
  description: string,
  identification: string,
  type_id: string,
}

class EquipmentUpdateService {
  async execute({ id, description, identification, type_id }: EquipmentRequest) {

    const equipmentRepository = getCustomRepository(EquipmentRepository);

    const equipment = await equipmentRepository.findById(id);

    if(!equipment) {
      throw new AppError('Equipment not already exist!');
    }

    equipment.description = description;
    equipment.identification = identification;
    equipment.type_id = type_id

    await equipmentRepository.save(equipment)

    return equipment;
  }

}

export default EquipmentUpdateService;