import UserRepository from '../../../../infrastructure/repositories/user/UserRepository';
import MailTrapMailProvider from '../../../../infrastructure/providers/mailtrap/MailTrapMailProvider';
import CreateUserUserCase from '../../../../business/use-cases/user/create/CreateUserUseCase';
import CreateUserController from '../../../controllers/user/create/CreateUserController';

const mailTrapMailProvider = new MailTrapMailProvider();
const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUserCase(
  userRepository,
  mailTrapMailProvider,
);

const createUserController = new CreateUserController(
  createUserUseCase,
);

export {
  createUserUseCase,
  createUserController,
};
