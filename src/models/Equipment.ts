import { uuid } from 'uuidv4';

class Equipment {

  id: string;
  description: string;
  identification: string;
  type_id: string;
  isAvailable: boolean;

  constructor(description: string, identification: string, type_id: string, isAvailable: boolean) {
    this.id = uuid();
    this.description = description;
    this.identification = identification;
    this.type_id = type_id;
    this.isAvailable = isAvailable;
  }
}

export default Equipment;
