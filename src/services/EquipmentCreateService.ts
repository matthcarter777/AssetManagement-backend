import { response } from 'express';
import { getCustomRepository } from 'typeorm';

import EquipmentRepository from '../repositories/EquipmentsRepository';

interface EquipmentRequest {
  description: string,
  identification: string,
  type_id: string,
}

class EquipmentIndexService {
  async execute({ description, identification, type_id }: EquipmentRequest) {

    const equipmentRepository = getCustomRepository(EquipmentRepository);

    const getEquipmentByIdentification = equipmentRepository.findOne({
      identification
    });

    if(getEquipmentByIdentification) {
      console.log('Equipamento ja dastrado!');
      return;
    }

    const equipments = equipmentRepository.create({
      description,
      identification,
      type_id,
    })

    await equipmentRepository.save(equipments)

    return equipments;
  }

}

export default EquipmentIndexService;