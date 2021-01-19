import Type from '../models/Type';
import TypeRepository from '../repositories/TypeRepositorie';

interface IRequest {
  description: string;
}

export default class TypeService {
  public async execute({description}: IRequest): Promise<void> {
    //const typeRepository = new TypeRepository();

    console.log(`Aqui service ${description}`);

    /* const findType = await typeRepository.findByName(description);

    if(findType) {
      throw new Error('This type is already booked');
    }

    const type = await typeRepository.create({
      description
    });
 */
    //return type;
  }
}
