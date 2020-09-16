import CreateUserUserCase from '@business/User/use-cases/create/CreateUserUseCase';
import UserRepository from '@infrastructure/repositories/user/UserRepository';
import MailTrapMailProvider from '@infrastructure/providers/mailtrap/MailTrapMailProvider';
import { database } from '@config';
import CreateUserController from '../../../controllers/user/create/CreateUserController';

import { connection } from '../../../../../database/relational';

const queryBuilder = connection();

const mailTrapMailProvider = new MailTrapMailProvider();
const userRepository = new UserRepository(queryBuilder, database.relational.tables.partners);

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
