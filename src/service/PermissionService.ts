import 'reflect-metadata';
import { Service } from 'typedi';

import { permissionRepository } from '../repository/PermissionRepository';
import PermissionGroupRepository from '../repository/PermissionGroupRepository';
import rpRelateRepository from '../repository/RpRelateRepository';
import PermissionDTO from '../dto/PermissionDTO';
import Result from '../commons/Result';
import { Permission } from '../entity/Permission';
import { plainToClass } from 'class-transformer';
import { Role } from '../entity/Role';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
export class PermissionService {
  @InjectRepository()
  private permissionGroupRepository: PermissionGroupRepository;
  //创建新的权限
  async createPermission(permissionDTO: PermissionDTO): Promise<Result<null>> {
    const exist = await this.permissionGroupRepository.exists({
      where: {
        id: permissionDTO.group_id,
      },
    });
    if (!exist) {
      return Result.fail('输入权限分组有误');
    }
    if (permissionDTO.operate !== 1 && permissionDTO.operate !== 2 && permissionDTO.operate !== 4) {
      return Result.fail('输入权限操作有误');
    }
    const permission = plainToClass(Permission, permissionDTO);
    await permissionRepository.insert(permission);
    return Result.success();
  }

  //根据权限查询角色列表
  async getRolesByPermId(id: number): Promise<Result<Role[] | null>> {
    // const ids = await rpRelateRepository
    //   .createQueryBuilder('rp_relate')
    //   .select('role_id')
    //   .where(id)
    //   .getMany();
    return Result.fail('');
  }
}
