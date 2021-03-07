import { Request, Response } from 'express';


class UserController {
  async index(request: Request, response: Response) {

    return response.status(201).json({ok: 'Users'});
  }

}

export default UserController;