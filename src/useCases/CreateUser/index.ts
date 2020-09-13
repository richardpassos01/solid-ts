import PostgresUserRepository from '../../repositories/implementations/PostgresUserRepository';
import MailTrapMailProvider from '../../providers/implementation/MailTrapMailProvider';
import CreateUserUserCase from './CreateUserUseCase';
import CreateUserController from './CreateUserController';

const mailTrapMailProvider = new MailTrapMailProvider();
const postgresUserRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUserCase(
  postgresUserRepository,
  mailTrapMailProvider,
);

const createUserController = new CreateUserController(
  createUserUseCase,
);

export {
  createUserUseCase,
  createUserController,
};
