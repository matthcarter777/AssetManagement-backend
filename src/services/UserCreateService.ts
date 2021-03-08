import { getCustomRepository } from 'typeorm';
import { AppError } from '../Errors/AppError';

import UserRepository from '../repositories/UserRepository';

interface userRequest {
  name: string,
  email: string,
  cpf: string,
  registration: string,
  password?: string,
}

class UserCreateService {
  async execute({ name, email, cpf, registration, password }: userRequest) {

    const userRepository = getCustomRepository(UserRepository);

    const findUserByEmail = await userRepository.findByEmail(email);

    if(findUserByEmail) {
      throw new AppError('User already exist!');
    }

    const user = userRepository.create({
      name,
      email,
      cpf,
      registration,
      password
    })

    await userRepository.save(user)

    return user;
  }

}

export default UserCreateService;