import { DataSource } from 'typeorm';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'yuhu5482',
  database: 'yu_rdbc',
  synchronize: false,
  logging: ['query', 'error'],
  entities: [User],
  migrations: [],
  subscribers: [],
});

export const initializeDataSource = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (err) {
    console.error('Error during Data Source initialization:', err);
    throw err; // 抛出错误以便在主文件中处理
  }
};
