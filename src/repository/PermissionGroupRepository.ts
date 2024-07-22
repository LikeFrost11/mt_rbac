import { PermissionGroup } from '../entity/PermissionGroup';
import { AppDataSource } from '../data-source';

export const permissionGroupRepository = AppDataSource.getRepository(PermissionGroup);
