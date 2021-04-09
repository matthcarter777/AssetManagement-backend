import { Request, Response } from 'express';

import UserCreateService from '../services/UserCreateService';
import UserDeleteService from '../services/UserDeleteService';
import UserIndexService from '../services/UserIndexService';
import UserShowService from '../services/UserShowService';
import UserUpdateService from '../services/UserUpdateService';

class UserController {
  async index(request: Request, response: Response) {
    const userService = new UserIndexService;

    const user = await userService.execute()

    return response.status(201).json(user);
  }

  async create(request: Request, response: Response) {
    const { name, email, cpf, registration, position, password } = request.body;

    const userService = new UserCreateService();

    const user = await userService.execute({
      name,
      email,
      cpf,
      registration,
      position,
      password
    }) 

    return response.status(201).json(user);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const userService = new UserShowService();

    const user = await userService.execute(id);

    return response.status(201).json(user);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { 
      name,
      email,
      cpf,
      registration,
      position,
      password
    } = request.body;

    const userService = new UserUpdateService();

    const user = await userService.execute({ 
      id,
      name,
      email,
      cpf,
      registration,
      position,
      password
     });

    return response.status(201).json(user);
  }

  
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const userService = new UserDeleteService();

    await userService.execute(id);

    return response.status(201).json({
      message: 'User deleted!'
    });
  }

  async config(request: Request, response: Response) {

    const userService = new UserCreateService();

    const userAdmin = {
      name: 'Admin' ,
      email: 'admin@admin.com',
      cpf: '00000000000',
      registration: '0000',
      position: 'admin',
      password: 'm!0l0553'
    };

    await userService.execute(userAdmin);

    return response.status(201).json({
      message: 'User Admin created!'
    });
  }

}

export default UserController;
