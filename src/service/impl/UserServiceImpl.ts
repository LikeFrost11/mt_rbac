import 'reflect-metadata';
import { Service } from 'typedi';
import { UserService } from '../UserService';
import { userRepository } from '../../repository/UserRepository';
import { User } from '../../entity/User';
import Result from '../../commons/Result';

@Service()
export class UserServiceImpl implements UserService {
  private userRepository = userRepository;

  async getAllUsers(): Promise<Result<User[] | null>> {
    const users = await this.userRepository.find();
    if (users.length == 0) {
      return Result.fail('没有用户');
    } else {
      return Result.successWithList(users, users.length);
    }
  }

  async getUserById(id: number): Promise<Result<User | null>> {
    const user = await this.userRepository.findOneBy({ id });
    if (user) {
      return Result.successWithData(user);
    } else {
      return Result.fail(`没有id为 ${id} 的用户`);
    }
  }

  async getUserByName(name: string): Promise<Result<User[] | null>> {
    const users = await this.userRepository.getByName(name);
    if (users.length == 0) {
      return Result.fail(`没有userName为 ${name} 的用户`);
    } else {
      return Result.successWithList(users, users.length);
    }
  }
}
