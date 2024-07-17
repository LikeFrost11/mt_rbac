import { Context } from 'koa';
import AppDataSource from '../data-source';
import { User } from "../entity/User";
import { Repository } from 'typeorm';

export default class UserController {
  private userRepository: Repository<User> = AppDataSource.getRepository(User);
  async getAllUsers(ctx: Context) {
    const users = await this.userRepository.find({ relations: ['posts'] });
    ctx.body = users;
  }

  static async createUser(ctx: Context) {
    const userRepository = AppDataSource.getRepository(User);
    const body = ctx.request.body as Partial<User>;
    const newUser = userRepository.create(body);
    const result = await userRepository.save(newUser);
    ctx.body = result;
  }

  static async getUserById(ctx: Context) {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id: parseInt(ctx.params.id) },
      relations: ['posts'],
    });
    if (user) {
      ctx.body = user;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'User not found' };
    }
  }

  static async updateUser(ctx: Context) {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: parseInt(ctx.params.id) });
    if (user) {
      const body = ctx.request.body as Partial<User>;
      userRepository.merge(user, body);
      const result = await userRepository.save(user);
      ctx.body = result;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'User not found' };
    }
  }

  static async deleteUser(ctx: Context) {
    const userRepository = AppDataSource.getRepository(User);
    const result = await userRepository.delete(ctx.params.id);
    if (result.affected) {
      ctx.status = 204;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'User not found' };
    }
  }
}
