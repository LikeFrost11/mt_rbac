import { Post, JsonController, Body } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { PermissionServiceImpl } from '../service/impl/PermissionServiceImpl';
import PermissionDTO from '../dto/PermissionDTO';

@Service()
@JsonController('/perm')
export default class PermissionController {
  constructor(
    @Inject()
    private permissionService: PermissionServiceImpl
  ) {}

  @Post('/')
  async createPermission(@Body() permissionDTO: PermissionDTO) {
    console.log('添加新的权限: ', permissionDTO);
    return this.permissionService.createPermission(permissionDTO);
  }
}
