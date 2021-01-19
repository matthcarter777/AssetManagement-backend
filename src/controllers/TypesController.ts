import { Request, Response } from 'express';

import TypeService from '../services/TypeService';

export default class TypesController {

  public async create(request: Request,response: Response): Promise<Response> {
    const { description } = request.body;
    console.log('Aqui Controller');

    const typeService = new TypeService();

    typeService.execute({description});

    return response.json();
  }
}