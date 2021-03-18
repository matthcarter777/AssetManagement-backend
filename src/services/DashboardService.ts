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
      radioTotal: equipmentsFind.filter(equipment => equipment.type_id === '9988dab9-b5e2-4ca6-a1a0-f5783916d41c').length,
      radioAvailable: equipmentsFind.filter(equipment => equipment.type_id === '9988dab9-b5e2-4ca6-a1a0-f5783916d41c' && equipment.isAvailable === true ).length,
      notebookTotal: equipmentsFind.filter(equipment => equipment.type_id === 'a7545650-c8ad-49b7-a615-0a81b7999a88').length,
      notebookAvailable: equipmentsFind.filter(equipment => equipment.type_id === 'a7545650-c8ad-49b7-a615-0a81b7999a88' && equipment.isAvailable === true).length,
      cellphoneTotal: equipmentsFind.filter(equipment => equipment.type_id === 'c33dde76-79d6-42e2-a312-4c3a7545df02').length,
      cellphoneAvailable: equipmentsFind.filter(equipment => equipment.type_id === 'c33dde76-79d6-42e2-a312-4c3a7545df02' && equipment.isAvailable === true).length,
      simTotal: equipmentsFind.filter(equipment => equipment.type_id === 'df30a5cb-3a53-4bc6-8263-d4ad6da15baf').length,
      simAvailable: equipmentsFind.filter(equipment => equipment.type_id === 'df30a5cb-3a53-4bc6-8263-d4ad6da15baf' && equipment.isAvailable === true).length,
    }
    
    return equipments;
  }

}

export default DashboardIndexService;