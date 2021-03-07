import { Request, Response } from 'express';

import TypeCreateService from '../services/TypeCreateService';
import TypeIndexService  from '../services/TypeIndexService';
import TypeShowService   from '../services/TypeShowService';
import TypeUpdateService from '../services/TypeUpdateService';
import TypeDeleteService from '../services/TypeDeleteService';

class TypeController {
  async index(request: Request, response: Response) {
    const typeIndexService = new TypeIndexService();

    const types = await typeIndexService.execute();

    return response.status(201).json(types);
  }

  async create(request: Request, response: Response) {
    const { name } = request.body;

    const typeCreateService = new TypeCreateService();
    
    const type = await typeCreateService.execute(name);
    
    return response.status(201).json(type);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const typeShowService = new TypeShowService();
    
    const findType = await typeShowService.execute(id);

    return response.status(200).json(findType);
  }

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
  }
}

export default TypeController;