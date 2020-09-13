import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './ICreateUserDTO';
import User from '../../entities/User';
import { IMailProvider } from '../../providers/IMailProvider';

export default class CreateUserUserCase {
  constructor(
    private userRepository: IUsersRepository,
    private mailProvider: IMailProvider,
  ) { }

  async execute(data: ICreateUserRequestDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User(data);

    await this.userRepository.save(user);

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
