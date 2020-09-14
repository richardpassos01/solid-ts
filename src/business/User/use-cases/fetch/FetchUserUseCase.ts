import { IUserRepository } from '../IUserRepository';
import { IFetchUserDTORequestDTO } from './IFetchUserDTO';
import User from '../../User';

export default class FetchUserUserCase {
  constructor(
    private userRepository: IUserRepository,
  ) { }

  async execute(data: IFetchUserDTORequestDTO): Promise<User> {
    return this.userRepository.fetch(data.id);
  }
}
