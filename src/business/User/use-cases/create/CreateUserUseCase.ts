import { IMailProvider } from '@infrastructure/providers/IMailProvider';
import { IUserRepository } from '../IUserRepository';
import { ICreateUserRequestDTO } from './ICreateUserDTO';
import User from '../../User';

export default class CreateUserUserCase {
  constructor(
    private userRepository: IUserRepository,
    private mailProvider: IMailProvider,
  ) { }

  async execute(data: ICreateUserRequestDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.fetchByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User(data);

    await this.userRepository.create(user);

    await this.mailProvider.sendEmail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'teste',
        email: 'teste@teste.com',
      },
      body: '<p>You read this email</p>',
      subject: 'Read this email',
    });
  }
}
