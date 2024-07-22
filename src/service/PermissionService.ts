import 'reflect-metadata';
import Result from '../commons/Result';
import PermissionDTO from '../dto/PermissionDTO';

export interface PermissionService {
  createPermission(permissionDTO: PermissionDTO): Promise<Result<null>>;
}
