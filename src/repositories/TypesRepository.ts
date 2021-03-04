import { EntityRepository, Repository, getRepository } from "typeorm";

import { Type } from "../models/Type";


@EntityRepository(Type)
class TypeRepository extends Repository<Type> {
  private ormRepository: Repository<Type>;

  constructor() {
    super();
    this.ormRepository = getRepository(Type);
  }
  
  public async findById(id: string) {
    const find = await this.ormRepository.findOne({
      where: { id }
    });

    return find || undefined;
  }
}

export default TypeRepository;  