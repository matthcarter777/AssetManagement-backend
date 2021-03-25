import { getCustomRepository } from 'typeorm';
import { AppError } from './../Errors/AppError';

import HtmlPDFrovider from '../providers/implementations/HtmlPDFrovider';
import LendingContractRepository from '../repositories/LendingContractRepository';
import EquipmentRepository from '../repositories/EquipmentsRepository';
import UserRepository from '../repositories/UserRepository';
import dateFormate from '../shared/dateFormat';

class LendingContractCreatePDFService {
  async execute(id) {

    const pdfContractCreate = new HtmlPDFrovider()
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
      date: dateFormate(findLendingContract.date),
      name: users.find(user => user.id === findLendingContract.user_id).name,  
      cpf: users.find(user => user.id === findLendingContract.user_id).cpf,
      registration: users.find(user => user.id === findLendingContract.user_id).registration,
      equipment: equipment.find(equipment => equipment.id === findLendingContract.equipment_id).description,
      identification: equipment.find(equipment => equipment.id === findLendingContract.equipment_id).identification,
    }

    await pdfContractCreate.generateContract(lendingContract);

    return;
  }

}

export default LendingContractCreatePDFService;