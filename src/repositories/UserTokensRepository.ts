import { getRepository, Repository, EntityRepository } from 'typeorm';

import UserToken from '../models/UserToken';

@EntityRepository(UserToken)
class UserTokensRepository extends Repository<UserToken> {
  private ormRepository: Repository<UserToken>;

  constructor() {
    super();
    this.ormRepository = getRepository(UserToken);
  }
  
  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.ormRepository.findOne({
        where: { token },
    });

    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
  const userToken = this.ormRepository.create({
      user_id,
  });

  await this.ormRepository.save(userToken);

  return userToken;
  }
}

export default UserTokensRepository;  
