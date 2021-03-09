import { getCustomRepository } from 'typeorm';
import { AppError } from '../Errors/AppError';

import EquipmentRepository from '../repositories/EquipmentsRepository';

interface EquipmentRequest {
  description: string,
  identification: string,
  type_id: string,
}

class EquipmentCreateService {
  async execute({ description, identification, type_id }: EquipmentRequest) {

    const equipmentRepository = getCustomRepository(EquipmentRepository);

    const getEquipmentByIdentification = await equipmentRepository.findByIdentification(
      identification
    );

    if(getEquipmentByIdentification && 
      getEquipmentByIdentification.type_id === type_id
      ) {
      throw new AppError('Epquipment already exist!');
    };

    const equipments = equipmentRepository.create({
      description,
      identification,
      type_id,
    })

    await equipmentRepository.save(equipments)

    return equipments;
  }

}

export default EquipmentCreateService;