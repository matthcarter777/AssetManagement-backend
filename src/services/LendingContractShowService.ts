import { AppError } from './../Errors/AppError';
import { getCustomRepository } from 'typeorm';

import LendingContractRepository from '../repositories/LendingContractRepository';

class LendingContractShowService {
  async execute(id: string) {

    const lendingContractRepository = getCustomRepository(LendingContractRepository);

    const lendingContract = await lendingContractRepository.findById(id);

    if(!lendingContract) {
      throw new AppError('Lending contract not already exist!');
    };

    return lendingContract;
  }

}

export default LendingContractShowService;