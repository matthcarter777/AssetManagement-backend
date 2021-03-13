import { AppError } from './../Errors/AppError';
import { getCustomRepository } from 'typeorm';
import EquipmentRepository from '../repositories/EquipmentsRepository';

import LendingContractRepository from '../repositories/LendingContractRepository';
import UserRepository from '../repositories/UserRepository';

interface ILendingContractRequest {
  user_id: string,
  equipment_id: string,
}
  
class LendingContractCreateService {
  async execute({ user_id, equipment_id }: ILendingContractRequest) {

    const lendingContractRepository = getCustomRepository(LendingContractRepository);
    const equipmentRepository = getCustomRepository(EquipmentRepository);
    const userRepository = getCustomRepository(UserRepository);

    const findEquipmentIsAvailable = await equipmentRepository.findOne({
      id: equipment_id
    });

    const findUserExists = await userRepository.findOne({
      id: user_id
    });

    if(!findEquipmentIsAvailable || !findUserExists) {
      throw new AppError('Equipment or user not found!');
    }

    if(findEquipmentIsAvailable.isAvailable === false) {
      throw new AppError('equipment in use');
    }

    findEquipmentIsAvailable.isAvailable = false;

    await equipmentRepository.save(findEquipmentIsAvailable);

    const lendingContract = lendingContractRepository.create({
      date:  new Date(),
      user_id,
      equipment_id
    });

    await lendingContractRepository.save(lendingContract);

    return lendingContract;
  }

}

export default LendingContractCreateService;