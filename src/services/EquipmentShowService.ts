import { getCustomRepository } from 'typeorm';

import { AppError } from '../Errors/AppError';

import EquipmentRepository from '../repositories/EquipmentsRepository';
import TypeRepository from '../repositories/TypesRepository';

interface EquipmentRequest {
  id: string
}

class EquipmentShowService {
  async execute({ id }: EquipmentRequest) {

    const equipmentRepository = getCustomRepository(EquipmentRepository);
    const typeRepository = getCustomRepository(TypeRepository);

    const equipmentsFind = await equipmentRepository.findById(id);
    const types = await typeRepository.find();  

    if(!equipmentsFind) {
      throw new AppError('Equipment not already exist!');
    }

    const{ description, identification, type_id, isAvailable } = equipmentsFind;

    const equipment = {
      id,
      description,
      identification,
      type: types.find( type => type.id === equipmentsFind.type_id).name,
      type_id,
      isAvailable,
      available: isAvailable === true ? 'Disponível' : 'Indisponivel'
    }

    return equipment;
  }
}

export default EquipmentShowService;