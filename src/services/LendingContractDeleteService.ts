import { AppError } from './../Errors/AppError';
import { getCustomRepository } from 'typeorm';

import LendingContractRepository from '../repositories/LendingContractRepository';
import EquipmentRepository from '../repositories/EquipmentsRepository';

class LendingContractDeleteService {
  async execute(id: string) {

    const lendingContractRepository = getCustomRepository(LendingContractRepository);
    const equipmentRepository = getCustomRepository(EquipmentRepository);

    const findLendingContract = await lendingContractRepository.findById(id);

    if(!findLendingContract) {
      throw new AppError('Equipment not already exist!');
    };

    const findEquipment = await equipmentRepository.findOne({
      id: findLendingContract.equipment_id
    })

    findEquipment.isAvailable = true;

    await lendingContractRepository.remove(findLendingContract);
    await equipmentRepository.save(findEquipment);

    return;
  }

}

export default LendingContractDeleteService;