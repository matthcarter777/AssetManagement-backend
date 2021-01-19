import { Request, Response } from 'express';

export default class TypesController {

  public async create(request: Request,response: Response): Promise<Response> {

    return response.json();
  }
}