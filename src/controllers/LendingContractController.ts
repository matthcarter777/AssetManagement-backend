import { Request, Response } from 'express';

import LendingContractCreateService from '../services/LendingContractCreateService';
import LendingContractDeleteService from '../services/LendingContractDeleteService';
import LendingContractIndexService from '../services/LendingContractIndexService';
import LendingContractShowService from '../services/LendingContractShowService';
import LendingContractUpdateService from '../services/LendingContractUpdateService';

class LendingContractController {
  async index(request: Request, response: Response) {
    const lendingContractIndexService = new LendingContractIndexService();

    const lendingContracts = await lendingContractIndexService.execute();
    
    return response.status(201).json(lendingContracts);
  }

  async create(request: Request, response: Response) {
    const { equipment_id, user_id } = request.body;

    const lendingContractCreateService = new LendingContractCreateService();
    
    const lendingContract = await lendingContractCreateService.execute({
      equipment_id,
      user_id
    });
    
    return response.status(201).json(lendingContract);
  }

 
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const lendingContractShowService = new LendingContractShowService();
    
    const findLendingContract = await lendingContractShowService.execute(id);

    return response.status(200).json(findLendingContract);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { user_id, equipment_id } = request.body;

    const lendingContractUpdateService = new LendingContractUpdateService();

    const userContractUpdated = await lendingContractUpdateService.execute(
      id,
      user_id,
      equipment_id
    );

    return response.status(200).json(userContractUpdated);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    
    const lendingContractDeleteService = new LendingContractDeleteService();

    await lendingContractDeleteService.execute(id);

    return response.status(200).json({
      message: 'Lending contract deleted!'
    });
  }
}

export default LendingContractController;