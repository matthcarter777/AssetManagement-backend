import { EntityRepository, Repository, getRepository } from "typeorm";

import { LendingContract } from "../models/LendingContract";


@EntityRepository(LendingContract)
class LendingContractRepository extends Repository<LendingContract> {
  private ormRepository: Repository<LendingContract>;

  constructor() {
    super();
    this.ormRepository = getRepository(LendingContract);
  }
  
  public async findById(id: string) {
    const find = await this.ormRepository.findOne({
      where: { id }
    });

    return find || undefined;
  }
}

export default LendingContractRepository;  