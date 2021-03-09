import { getCustomRepository } from 'typeorm';

import { AppError } from '../Errors/AppError';

import UserRepository from '../repositories/UserRepository';

interface UserRequest {
  id: string,
  name: string,
  email: string,
  cpf: string,
  registration: string,
  password?: string,
}

class UserUpdateService {
  async execute({ id, name, email, cpf, registration, password }: UserRequest) {

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findById(id);

    if(!user) {
      throw new AppError('User not already exist!');
    }

    user.name = name;
    user.email = email;
    user.cpf = cpf
    user.registration = registration
    user.password = password

    await userRepository.save(user)

    return user;
  }

}

export default UserUpdateService;