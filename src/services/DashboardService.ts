import { getCustomRepository } from 'typeorm';

import EquipmentRepository from '../repositories/EquipmentsRepository';
import TypeRepository from '../repositories/TypesRepository';

class DashboardIndexService {
  async execute() {
    const equipmentRepository = getCustomRepository(EquipmentRepository);
    const typeRepository = getCustomRepository(TypeRepository);

    const equipmentsFind = await equipmentRepository.find();
    const typesFind = await typeRepository.find();  

    const equipments = {

    }
    
    return equipments;
  }

}

export default DashboardIndexService;