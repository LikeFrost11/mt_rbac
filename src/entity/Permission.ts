import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import moment from 'moment';

@Entity('permission') // 指定表名
export class Permission {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 64, name: 'perm_desc' })
  permDesc!: string;

  @Column({ type: 'int', name: 'group_id' })
  groupId!: number;

  @Column({ type: 'int', nullable: true })
  operate!: number;

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
