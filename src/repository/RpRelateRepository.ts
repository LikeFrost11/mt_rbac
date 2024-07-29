import RpRelate from '../entity/RpRelate';
import { appDataSource } from '../data-source';

const rpRelateRepository = appDataSource.getRepository(RpRelate).extend({
  getRoleIds(perm_id: number) {
    const ids = this.createQueryBuilder('rp_relate')
      .select('role_id')
      .where('rp_relate.perm_id = :perm_id', { perm_id })
      .getRawMany<{ role_id: number }>();
    return ids;
  },
});
export default rpRelateRepository;
