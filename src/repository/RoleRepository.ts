import { Role } from '../entity/Role';
import { appDataSource } from '../data-source';

export const roleRepository = appDataSource.getRepository(Role);
