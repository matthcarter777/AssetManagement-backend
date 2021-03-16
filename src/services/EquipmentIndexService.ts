import { getCustomRepository } from 'typeorm';

import EquipmentRepository from '../repositories/EquipmentsRepository';
import TypeRepository from '../repositories/TypesRepository';

interface EquipmentRequest {
  description: string,
  idetification: string,
  type_id: string,
}

class EquipmentIndexService {
  async execute() {
    const equipmentRepository = getCustomRepository(EquipmentRepository);
    const typeRepository = getCustomRepository(TypeRepository);

    const equipmentsFind = await equipmentRepository.find();
    const types = await typeRepository.find();  

    const equipments = equipmentsFind.map(equipment => {
      return {
        id: equipment.id,
        description: equipment.description,
        identification: equipment.identification,
        type: types.find( type => type.id === equipment.type_id).name,
        type_id: equipment.type_id,
        available: equipment.isAvailable === true ? 'Disponível' : 'Indisponivel',
        isAvailable: equipment.isAvailable
      }
    })
    
    return equipments;
  }

}

export default EquipmentIndexService;