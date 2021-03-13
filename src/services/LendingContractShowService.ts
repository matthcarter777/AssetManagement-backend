import { AppError } from './../Errors/AppError';
import { getCustomRepository } from 'typeorm';

import LendingContractRepository from '../repositories/LendingContractRepository';
import EquipmentRepository from '../repositories/EquipmentsRepository';
import UserRepository from '../repositories/UserRepository';

class LendingContractShowService {
  async execute(id: string) {

    const lendingContractRepository = getCustomRepository(LendingContractRepository);
    const userRepository = getCustomRepository(UserRepository);
    const equipmentRepository = getCustomRepository(EquipmentRepository);

    const findLendingContract = await lendingContractRepository.findById(id);
    const users = await userRepository.find();
    const equipment = await equipmentRepository.find();

    if(!findLendingContract) {
      throw new AppError('Lending contract not already exist!');
    };

    const lendingContract = {
      id: findLendingContract.id,
      name: users.find(user => user.id === findLendingContract.user_id).name,  
      cpf: users.find(user => user.id === findLendingContract.user_id).cpf,
      equipment: equipment.find(equipment => equipment.id === findLendingContract.equipment_id).description,
      identification: equipment.find(equipment => equipment.id === findLendingContract.equipment_id).identification,
      user_id: findLendingContract.user_id,
      equipment_id: findLendingContract.equipment_id
    }

    return lendingContract;
  }

}

export default LendingContractShowService;