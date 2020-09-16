import FetchUserUserCase from '@business/User/use-cases/fetch/FetchUserUseCase';
import UserRepository from '@infrastructure/repositories/user/UserRepository';
import { database } from '@config';
import FetchUserController from '@application/controllers/user/fetch/FetchUserController';

import { connection } from '@database/relational';

const queryBuilder = connection();

const userRepository = new UserRepository(queryBuilder, database.relational.tables.partners);

const fetchUserUseCase = new FetchUserUserCase(
  userRepository,
);

const fetchUserController = new FetchUserController(
  fetchUserUseCase,
);

export {
  fetchUserUseCase,
  fetchUserController,
};
