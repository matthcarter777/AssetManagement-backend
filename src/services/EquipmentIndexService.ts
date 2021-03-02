import { getCustomRepository } from 'typeorm';

import EquipmentRepository from '../repositories/EquipmentsRepository';

interface EquipmentRequest {
  description: string,
  idetification: string,
  type_id: string,
}

class EquipmentIndexService {
  async execute() {

    const equipmentRepository = getCustomRepository(EquipmentRepository);

    const equipments = equipmentRepository.find();

    return equipments;
  }

}

export default EquipmentIndexService;