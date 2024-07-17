import Router from '@koa/router';
import UserController from '../controller/UserController';

const userRouter = new Router();

userRouter.get('/users', UserController.getAllUsers);
userRouter.post('/users', UserController.createUser);
userRouter.get('/users/:id', UserController.getUserById);
userRouter.put('/users/:id', UserController.updateUser);
userRouter.delete('/users/:id', UserController.deleteUser);

export default userRouter;
