import { Post, JsonController, Body, Get, Param } from 'routing-controllers';
import { Inject, Service } from 'typedi';

import PermissionDTO from '../dto/PermissionDTO';
import { PermissionService } from '../service/PermissionService';

@Service()
@JsonController('/perm')
export default class PermissionController {
  constructor(
    @Inject()
    private permissionService: PermissionService
  ) {}

  @Post('/')
  async createPermission(@Body() permissionDTO: PermissionDTO) {
    console.log('添加新的权限: ', permissionDTO);
    return this.permissionService.createPermission(permissionDTO);
  }

  //根据权限查询角色列表
  @Get('/roles/:id')
  async getRolesByPermId(@Param('id') id: number) {
    console.log('查询权限关联角色 权限id: ', id);
    return this.permissionService.getRolesByPermId(id);
  }
}
