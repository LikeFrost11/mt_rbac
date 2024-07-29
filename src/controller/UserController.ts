import { Get, JsonController, Param, QueryParam } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { UserService } from '../service/UserService';

@Service()
@JsonController('/users')
export default class UserController {
  @Inject()
  private userService: UserService;

  @Get('/')
  async getAllUsers() {
    console.log('查询所有用户');
    return this.userService.getAllUsers();
  }

  // async createUser(ctx: Context) {
  //   const userRepository = this.userRepository;
  //   const body = ctx.request.body as Partial<User>;
  //   const newUser = userRepository.create(body);
  //   const result = await userRepository.save(newUser);
  //   ctx.body = result;
  // }
  @Get('/name')
  async getUserByName(@QueryParam('name') name: string) {
    console.log('查询用户: name = ', name);
    return this.userService.getUserByName(name);
  }

  @Get('/:id')
  async getUserById(@Param('id') id: number) {
    console.log('查询用户: id = ' + id);
    return this.userService.getUserById(id);
  }

  // async updateUser(ctx: Context) {
  //   const body = ctx.request.body as User;
  //   const result = this.userService.updateUser(body);
  //   ctx.body = result;
  // }

  // async deleteUser(ctx: Context) {
  //   const userRepository = this.userRepository;
  //   const result = await userRepository.delete(ctx.params.id);
  //   if (result.affected) {
  //     ctx.status = 204;
  //   } else {
  //     ctx.status = 404;
  //     ctx.body = { message: 'User not found' };
  //   }
  // }
}
