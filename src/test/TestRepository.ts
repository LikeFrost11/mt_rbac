import { permissionGroupRepository } from '../repository/PermissionGroupRepository';
import { AppDataSource } from '../data-source';

AppDataSource.initialize();
const exists = permissionGroupRepository.exists({
  where: {
    id: 1,
  },
});

console.log(exists);
