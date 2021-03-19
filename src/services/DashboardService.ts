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
        available: equipmentsFind.filter(equipment => equipment.type_id === type.id && equipment.isAvailable === true ).length,
      }
    })

    console.log(typesFiltered)

    /* Provisory search */
    const notebookId = typesFind.find(type => type.name === 'Notebook').id;
    const cellphoneId = typesFind.find(type => type.name === 'Celular').id;
    const radioId = typesFind.find(type => type.name === 'Radio').id;
    const chipId = typesFind.find(type => type.name === 'Chip').id;


    const equipments = {
      radioTotal: equipmentsFind.filter(equipment => equipment.type_id === radioId).length,
      radioAvailable: equipmentsFind.filter(equipment => equipment.type_id === radioId && equipment.isAvailable === true ).length,
      notebookTotal: equipmentsFind.filter(equipment => equipment.type_id === notebookId ).length,
      notebookAvailable: equipmentsFind.filter(equipment => equipment.type_id === notebookId && equipment.isAvailable === true).length,
      cellphoneTotal: equipmentsFind.filter(equipment => equipment.type_id === cellphoneId).length,
      cellphoneAvailable: equipmentsFind.filter(equipment => equipment.type_id === cellphoneId && equipment.isAvailable === true).length,
      simTotal: equipmentsFind.filter(equipment => equipment.type_id === chipId).length,
      simAvailable: equipmentsFind.filter(equipment => equipment.type_id === chipId && equipment.isAvailable === true).length,
    }
    
    return equipments;
  }

}

export default DashboardIndexService;