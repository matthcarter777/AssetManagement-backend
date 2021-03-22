import { getCustomRepository } from 'typeorm';

import EquipmentRepository from '../repositories/EquipmentsRepository';
import TypeRepository from '../repositories/TypesRepository';

class DashboardIndexService {
  async execute() {
    const equipmentRepository = getCustomRepository(EquipmentRepository);
    const typeRepository = getCustomRepository(TypeRepository);

    const equipmentsFind = await equipmentRepository.find();
    const typesFind = await typeRepository.find();
    
    const typesFiltered = typesFind.map(type => {
      return {
        name: type.name,
        total: equipmentsFind.filter(equipment => equipment.type_id === type.id).length,
        totalAvailable: equipmentsFind.filter(equipment => equipment.type_id === type.id && equipment.isAvailable === true ).length,
      }
    })
    
    return typesFiltered;
  }

}

export default DashboardIndexService;