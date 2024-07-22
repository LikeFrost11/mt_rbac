import 'reflect-metadata';
import { Service } from 'typedi';
import { PermissionService } from '../PermissionService';
import { permissionRepository } from '../../repository/PermissionRepository';
import { permissionGroupRepository } from '../../repository/PermissionGroupRepository';
import PermissionDTO from '../../dto/PermissionDTO';
import Result from '../../commons/Result';
import { Permission } from '../../entity/Permission';
import { plainToClass } from 'class-transformer';

@Service()
export class PermissionServiceImpl implements PermissionService {
  private permissionRepository = permissionRepository;
  private permissionGroupRepository = permissionGroupRepository;

  async createPermission(permissionDTO: PermissionDTO): Promise<Result<null>> {
    const exist = await permissionGroupRepository.exists({
      where: {
        id: permissionDTO.groupId,
      },
    });
    if (!exist) {
      return Result.fail('输入权限分组有误');
    }
    if (permissionDTO.operate !== 1 && permissionDTO.operate !== 2 && permissionDTO.operate !== 4) {
      return Result.fail('输入权限操作有误');
    }
    const permission = plainToClass(Permission, permissionDTO);
    permission.createTime;
    await permissionRepository.insert(permission);
    return Result.success();
  }
}
