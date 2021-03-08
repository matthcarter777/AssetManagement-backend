import { Request, Response } from 'express';

import UserCreateService from '../services/UserCreateService';
import UserIndexService from '../services/UserIndexService';

class UserController {
  async index(request: Request, response: Response) {
    const userService = new UserIndexService;

    const user = await userService.execute()

    return response.status(201).json(user);
  }

  async create(request: Request, response: Response) {
    const { name, email, cpf, registration, password } = request.body;

    const userService = new UserCreateService();

    const user = await userService.execute({
      name,
      email,
      cpf,
      registration,
      password
    }) 

    return response.status(201).json(user);
  }

}

export default UserController;