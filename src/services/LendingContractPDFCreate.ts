import { getCustomRepository } from 'typeorm';
import { AppError } from './../Errors/AppError';

import HtmlPDFrovider from '../providers/implementations/HtmlPDFrovider';

class LendingContractCreatePDFService {
  async execute(id) {

    const pdfContractCreate = new HtmlPDFrovider()

    const LendingContract = {
      id: 'HASUHAUSHUASHUAHSA',
      date: '03/04/2021',
      name: 'Mateus Henrique',
      cpf: '064.492.521-38',
      registration: '1601',
      equipment: 'Lenovo E480',
      identification: 'NTB001',
    }

    await pdfContractCreate.generateContract(LendingContract);

    return;
  }

}

export default LendingContractCreatePDFService;