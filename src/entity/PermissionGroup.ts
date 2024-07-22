import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import moment from 'moment';

@Entity('permission_group') // 指定表名
export class PermissionGroup {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 32, nullable: true, name: 'group_name' })
  groupName!: string;

  @Column({ type: 'varchar', length: 64, nullable: true, name: 'group_desc' })
  groupDesc!: string;

  @CreateDateColumn({
    name: 'create_time',
    type: 'datetime',
    transformer: {
      to: (value: Date) => value,
      from: (value: string) => moment(value).format('YYYY-MM-DD HH:mm:ss'),
    },
  })
  createTime!: Date;

  @UpdateDateColumn({
    name: 'update_time',
    type: 'datetime',
    transformer: {
      to: (value: Date) => value,
      from: (value: string) => moment(value).format('YYYY-MM-DD HH:mm:ss'),
    },
  })
  updateTime!: Date;
}
