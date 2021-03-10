import { getCustomRepository } from 'typeorm';
import { AppError } from '../Errors/AppError';

import UserRepository from '../repositories/UserRepository';
import HashProvider from '../providers/implementations/BCryptHashProvider';

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
    const hashProvider = new HashProvider();

    const findUserByEmail = await userRepository.findByEmail(email);

    if(findUserByEmail) {
      throw new AppError('User already exist!');
    }

    const hashedPassword = await hashProvider.generateHash(password);

    const user = userRepository.create({
      name,
      email,
      cpf,
      registration,
      password: hashedPassword
    })

    await userRepository.save(user)

    return user;
  }

}

export default UserCreateService;