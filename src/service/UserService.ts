import 'reflect-metadata';
import { User } from '../entity/User';
import Result from '../commons/Result';

export interface UserService {
  //private userRepository = userRepository;

  getAllUsers(): Promise<Result<User[] | null>>;

  getUserById(id: number): Promise<Result<User | null>>;

  getUserByName(name: string): Promise<Result<User[] | null>>;
  // async updateUser(body: User): Promise<User | null> {
  //   const user = this.userRepository.findById(body.id);
  //   if (user) {
  //     const result = await this.userRepository.save(user);
  //   } else {
  //     //ctx.status = 404;
  //     //ctx.body = { message: 'User not found' };
  //   }
  // }
  // 其他方法...
}
