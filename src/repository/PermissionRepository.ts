import { Permission } from '../entity/Permission';
import { AppDataSource } from '../data-source';

export const permissionRepository = AppDataSource.getRepository(Permission).extend({
  //   getByName(userName: string) {
  //     return (
  //       this.createQueryBuilder('user')
  //         .where('user.userName = :userName', { userName })
  //         //.andWhere("user.lastName = :lastName", { lastName })
  //         .getMany()
  //     );
  //   },
});
