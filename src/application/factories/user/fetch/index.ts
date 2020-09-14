import UserRepository from '../../../../infrastructure/repositories/user/UserRepository';
import FetchUserUserCase from '../../../../business/use-cases/user/fetch/FetchUserUseCase';
import FetchUserController from '../../../controllers/user/fetch/FetchUserController';

const userRepository = new UserRepository();

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
