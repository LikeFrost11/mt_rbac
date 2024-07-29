import { Permission } from '../entity/Permission';
import { appDataSource } from '../data-source';

export const permissionRepository = appDataSource.getRepository(Permission);
