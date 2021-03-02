import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("equipments")
class Equipment {
  
  @PrimaryColumn()
  readonly id: string;

  @Column()
  description: string;

  @Column()
  identification: string;

  @Column()
  type_id: string;

  @Column()
  isAvailable: boolean;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
      this.isAvailable = true;
    }
  }

}
 export { Equipment };