import { EntityRepository, Repository, getRepository } from "typeorm";
import { Equipment } from "../models/Equipment";

@EntityRepository(Equipment)
class EquipmentRepository extends Repository<Equipment> {
  private ormRepository: Repository<Equipment>;

  constructor() {
    super();
    this.ormRepository = getRepository(Equipment);
  }

  public async findById(id: string) {
    const find = await this.ormRepository.findOne({
      where: { id }
    });

    return find || undefined;
  }

  public async findByIdentification(identification: string) {
    const find = await this.ormRepository.findOne({
      where: { identification }
    });

    return find || undefined;
  }
}

export default EquipmentRepository; 
