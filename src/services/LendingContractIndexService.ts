import { getCustomRepository } from 'typeorm';

import EquipmentRepository from '../repositories/EquipmentsRepository';
import LendingContractRepository from '../repositories/LendingContractRepository';
import TypeRepository from '../repositories/TypesRepository';
import UserRepository from '../repositories/UserRepository';

class LendingContractIndexService {
  async execute() {
    const lendingContractRepository = getCustomRepository(LendingContractRepository);
    const userRepository = getCustomRepository(UserRepository);
    const equipmentRepository = getCustomRepository(EquipmentRepository);
    const typeRepository = getCustomRepository(TypeRepository)

    const lendingContracts =  await lendingContractRepository.find();
    const users = await userRepository.find();
    const equipment = await equipmentRepository.find();
    const type = await typeRepository.find();

    const lendingContractFormat = lendingContracts.map(ct => {
      return {
        id: ct.id,
        date: `${ct.date.getDate()}/${(ct.date.getMonth()+1)}/${ct.date.getFullYear()}`,
        name: users.find(user => user.id === ct.user_id).name,
        cpf: users.find(user => user.id === ct.user_id).cpf,
        registration: users.find(user => user.id === ct.user_id).registration,
        equipment: equipment.find(equipment => equipment.id === ct.equipment_id).description,
        identification: equipment.find(equipment => equipment.id === ct.equipment_id).identification,
        user_id: ct.user_id,
        equipment_id: ct.equipment_id
      }
    })

    return lendingContractFormat;
  }

}

export default LendingContractIndexService;