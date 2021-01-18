import { uuid } from 'uuidv4';

class Type {
  id: string;
  description: string;

  constructor(description: string) {
    this.id = uuid();
    this.description = description;
  }
}

export default Type;
