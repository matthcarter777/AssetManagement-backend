import { Request, Response } from 'express';

import LendingContractPDFCreate from '../services/LendingContractPDFCreate';

class LendingContractGenerateDPFController {
  async create(request: Request, response: Response) {
    const { id } = request.params;
    
    const lendingContractPDFCreate = new LendingContractPDFCreate();

    await lendingContractPDFCreate.execute(id);

    return response.status(200).json({
      message: 'Contract PDF Created!'
    });
  }
}

export default LendingContractGenerateDPFController;