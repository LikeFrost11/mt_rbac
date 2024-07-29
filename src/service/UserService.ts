import 'reflect-metadata';
import { Service } from 'typedi';

import { userRepository } from '../repository/UserRepository';
import { User } from '../entity/User';
import Result from '../commons/Result';
import { InjectRepository } from "typeorm-typedi-extensions";

@Service()
export class UserService {
  // @InjectRepository('localhost')
  // private userRepository: UserRepository;

  async getAllUsers(): Promise<Result<User[] | null>> {
    const users = await userRepository.find();
    if (users.length == 0) {
      return Result.fail('没有用户');
    } else {
      return Result.successWithList(users, users.length);
    }
  }

  async getUserById(id: number): Promise<Result<User | null>> {
    const user = await userRepository.findOneBy({ id });
    if (user) {
      return Result.successWithData(user);
    } else {
      return Result.fail(`没有id为 ${id} 的用户`);
    }
  }

  async getUserByName(name: string): Promise<Result<User[] | null>> {
    const users = await userRepository.getByName(name);
    if (users.length == 0) {
      return Result.fail(`没有user_name为 ${name} 的用户`);
    } else {
      return Result.successWithList(users, users.length);
    }
  }
}
