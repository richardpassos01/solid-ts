import Router from 'express';
import { createUserController } from './useCases/CreateUser';

const router = Router();

router.post('/users', (Request, Response) => createUserController.handle(Request, Response));

export default {
  router,
};
