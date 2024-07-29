import 'reflect-metadata';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { useKoaServer } from 'routing-controllers';
import { Container } from 'typedi';
import UserController from './controller/UserController';
import PermissionController from './controller/PermissionController';
import { appDataSource } from './data-source';
import { useContainer as typeOrmUseContainer } from 'typeorm';
import { useContainer as rcUseContainer } from 'routing-controllers';

rcUseContainer(Container); //routing-controllers使用typedi容器
typeOrmUseContainer(Container); //typeorm使用typedi容器

appDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    // 只有在数据源初始化成功后才启动服务器
    const app = new Koa();

    app.use(bodyParser());

    useKoaServer(app, {
      controllers: [UserController, PermissionController], // 手动注册控制器
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error during Koa Server initialization:', err);
  });
