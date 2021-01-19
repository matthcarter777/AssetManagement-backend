import { getRepository, Repository } from 'typeorm';
import Type from '../models/Type';

interface IType {
  description: string;
}

export default class TypeRepository {
  private ormRepository: Repository<Type>;

  constructor() {
    this.ormRepository = getRepository(Type);
  }

  public async findByName(description: String): Promise<Type | undefined> {
    const findType = await this.ormRepository.findOne({
      where: { description }
    });

    return findType;
  }

  public async create({description}: IType): Promise<Type> {
    const type = this.ormRepository.create({ description });

    await this.ormRepository.save(type);

    return type;
  }

}