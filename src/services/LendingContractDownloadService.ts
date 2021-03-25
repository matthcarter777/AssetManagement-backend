import { getCustomRepository } from 'typeorm';

import EquipmentRepository from '../repositories/EquipmentsRepository';
import LendingContractRepository from '../repositories/LendingContractRepository';
import UserRepository from '../repositories/UserRepository';
import dateFormate from '../shared/dateFormat';

import { AppError } from './../Errors/AppError';


class LendingContractDownloadService {
  async execute(id: string) {
    const equipmentRepository = getCustomRepository(EquipmentRepository);
    const lendingContractRepository = getCustomRepository(LendingContractRepository);
    const userRepository = getCustomRepository(UserRepository);

    const findLendingContract = await lendingContractRepository.findById(id);
    const users = await userRepository.find();
    const equipment = await equipmentRepository.find();

    if(!findLendingContract) {
      throw new AppError('Lending contract not already exist!');
    };

    const lendingContract = {
      id: findLendingContract.id,
      date: dateFormate(findLendingContract.date),
      name: users.find(user => user.id === findLendingContract.user_id).name,  
      cpf: users.find(user => user.id === findLendingContract.user_id).cpf,
      registration: users.find(user => user.id === findLendingContract.user_id).registration,
      equipment: equipment.find(equipment => equipment.id === findLendingContract.equipment_id).description,
      identification: equipment.find(equipment => equipment.id === findLendingContract.equipment_id).identification,
    }
    

    return lendingContract;
  }
}

export default LendingContractDownloadService;