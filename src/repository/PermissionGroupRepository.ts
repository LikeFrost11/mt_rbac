import { PermissionGroup } from '../entity/PermissionGroup';
import { appDataSource } from '../data-source';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(PermissionGroup)
export default class PermissionGroupRepository extends Repository<PermissionGroup> {

}
