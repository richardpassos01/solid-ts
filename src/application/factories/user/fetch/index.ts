import UserRepository from '../../../../infrastructure/repositories/user/UserRepository';
import FetchUserUserCase from '../../../../business/User/use-cases/fetch/FetchUserUseCase';
import FetchUserController from '../../../controllers/user/fetch/FetchUserController';

import { database } from '../../../../../config';

import { connection } from '../../../../../database/relational';

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
