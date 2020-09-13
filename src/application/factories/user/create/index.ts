import PostgresUserRepository from '../../../../infrastructure/repositories/implementations/PostgresUserRepository';
import MailTrapMailProvider from '../../../../infrastructure/providers/implementation/MailTrapMailProvider';
import CreateUserUserCase from '../../../../business/use-cases/user/create/CreateUserUseCase';
import CreateUserController from '../../../controllers/user/create/CreateUserController';

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
