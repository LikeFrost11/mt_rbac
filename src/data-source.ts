import { DataSource } from 'typeorm';
import { User } from './entity/User';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'yuhu5482',
  database: 'yu_rdbc',
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
