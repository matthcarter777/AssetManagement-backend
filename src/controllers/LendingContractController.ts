import { Request, Response } from 'express';

import LendingContractCreateService from '../services/LendingContractCreateService';
import LendingContractIndexService from '../services/LendingContractIndexService';
import LendingContractShowService from '../services/LendingContractShowService';

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

  /* 
  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const typeUpdateService = new TypeUpdateService();

    const type = await typeUpdateService.execute(id, name);

    return response.status(200).json(type);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    
    const typeDeleteService = new TypeDeleteService();

    await typeDeleteService.execute(id);

    return response.status(200).json({
      message: 'Type deleted!'
    });
  } */
}

export default LendingContractController;