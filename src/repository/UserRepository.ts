import { User } from '../entity/User';
import { AppDataSource } from '../data-source';

export const userRepository = AppDataSource.getRepository(User).extend({
  getByName(userName: string) {
    return (
      this.createQueryBuilder('user')
        .where('user.userName = :userName', { userName })
        //.andWhere("user.lastName = :lastName", { lastName })
        .getMany()
    );
  },
});
