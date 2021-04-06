import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("lendingContract")
class LendingContract {
  
  @PrimaryColumn()
  readonly id: string;

  @Column()
  date: Date;

  @Column()
  user_id: string;
  
  @Column()
  equipment_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}
 export { LendingContract };
 