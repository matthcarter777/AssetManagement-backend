import { Request, Response } from 'express';

import UserService from '../services/UserCreateService';

class UserController {
  async index(request: Request, response: Response) {

    return response.status(201).json({ok: 'Users'});
  }

  async create(request: Request, response: Response) {
    const { name, email, cpf, registration, password } = request.body;

    const userService = new UserService();

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