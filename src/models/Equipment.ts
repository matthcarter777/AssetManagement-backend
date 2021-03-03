import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

import { Type } from './Type';

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

  @ManyToOne(() => Type)
  @JoinColumn({ name: 'type_id' })
  type: Type;

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