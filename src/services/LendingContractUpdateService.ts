import { AppError } from './../Errors/AppError';
import { getCustomRepository } from 'typeorm';

import LendingContractRepository from '../repositories/LendingContractRepository';
import UserRepository from '../repositories/UserRepository';
import EquipmentRepository from '../repositories/EquipmentsRepository';

class LendingContractUpdateService {
  async execute(id: string, user_id: string, equipment_id: string) {

    const lendingContractRepository = getCustomRepository(LendingContractRepository);
    const userRepository = getCustomRepository(UserRepository);
    const equipmentRepository = getCustomRepository(EquipmentRepository);

    const findLendingContract = await lendingContractRepository.findById(id);
    const findUserExists = await userRepository.findOne({
      id: user_id
    });
    const findEquipmentIsAvailable = await equipmentRepository.findOne({
      id: equipment_id
    });

    if(!findLendingContract) {
      throw new AppError('Lending contract not already exist!');
    };

    if(!findEquipmentIsAvailable || !findUserExists) {
      throw new AppError('Equipment or user not found!');
    }

    if(findEquipmentIsAvailable.isAvailable === false) {
      throw new AppError('equipment in use');
    }

    const oldEquipment = await equipmentRepository.findOne({
      id: findLendingContract.equipment_id
    });

    oldEquipment.isAvailable = true;
    await equipmentRepository.save(oldEquipment);

    findLendingContract.user_id = user_id;
    findLendingContract.equipment_id = equipment_id;

    findEquipmentIsAvailable.isAvailable = false;
    await equipmentRepository.save(findEquipmentIsAvailable);    

    await lendingContractRepository.save(findLendingContract);

    return findLendingContract;
  }

}

export default LendingContractUpdateService;