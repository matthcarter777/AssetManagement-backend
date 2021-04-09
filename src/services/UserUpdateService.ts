import { getCustomRepository } from 'typeorm';

import { AppError } from '../Errors/AppError';
import BCryptHashProvider from '../providers/implementations/BCryptHashProvider';

import UserRepository from '../repositories/UserRepository';

interface UserRequest {
  id: string;
  name?: string;
  email?: string;
  cpf?: string;
  registration?: string;
  position: string;
  password?: string;
}

class UserUpdateService {
  async execute({ id, name, email, cpf, registration, position, password }: UserRequest) {

    const userRepository = getCustomRepository(UserRepository);
    const hashProvider = new BCryptHashProvider();

    const user = await userRepository.findById(id);

    if(!user) {
      throw new AppError('User not already exist!');
    }

    const hashedPassword = await hashProvider.generateHash(password);

    user.name = name;
    user.email = email;
    user.cpf = cpf;
    user.registration = registration;
    user.position = position;
    user.password = hashedPassword;

    await userRepository.save(user);

    return user;
  }

}

export default UserUpdateService;