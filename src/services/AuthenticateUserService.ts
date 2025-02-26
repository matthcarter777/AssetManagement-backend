import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

import { AppError } from '../Errors/AppError';
import authConfig from '../config/auth';
import { User } from '../models/User';
import UserRepository from '../repositories/UserRepository';
import BCryptHashProvider from '../providers/implementations/BCryptHashProvider';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: IRequest ): Promise<IResponse> {
    const userRepository = getCustomRepository(UserRepository);
    const hasProvider = new BCryptHashProvider();

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await hasProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })

    return {
      user,
      token
    }
  }

}

export default AuthenticateUserService;
