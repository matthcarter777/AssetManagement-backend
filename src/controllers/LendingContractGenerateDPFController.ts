import { Request, Response } from 'express';
import path from 'path';
import mime from 'mime';
import fs from 'fs'

import { AppError } from './../Errors/AppError';
import LendingContractPDFCreate from '../services/LendingContractPDFCreate';
import LendingContractDownloadService from '../services/LendingContractDownloadService';

class LendingContractGenerateDPFController {
  async create(request: Request, response: Response) {
    const { id } = request.params;
    
    const lendingContractPDFCreate = new LendingContractPDFCreate();

    await lendingContractPDFCreate.execute(id);

    return response.status(200).json({
      message: 'Contract PDF Created!'
    });
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    
    const file = path.join(__dirname, `../../contracts/${id}.pdf`);
    
    if(!file) {
      throw new AppError('File not already exist!');
    };

    return response.download(file);
  }
}

export default LendingContractGenerateDPFController;