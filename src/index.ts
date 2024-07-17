import 'reflect-metadata';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import AppDataSource from './data-source';
import userRouter from './route/userRoutes';

const app = new Koa();

app.use(bodyParser());

AppDataSource.initialize()
  .then(async () => {
    console.log('Data Source has been initialized!');

    app.use(userRouter.routes()).use(userRouter.allowedMethods());

    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
