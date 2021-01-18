import { Request, Response } from 'express';

export default class TypesController {
  public async create(request: Request,response: Response): Promise<Response> {
    const { description } = request.body;
    console.log('Aqui')

    return response.json({description});
  }
}