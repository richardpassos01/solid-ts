import Router from 'express';
import { createUserController } from '../factories/user/create';

const router = Router();

router.post('/users', (Request, Response) => createUserController.handle(Request, Response));

export default router;
