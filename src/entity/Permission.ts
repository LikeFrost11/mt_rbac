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

  @Column({ type: 'varchar', length: 64 })
  perm_desc!: string;

  @Column({ type: 'int' })
  group_id!: number;

  @Column({ type: 'int', nullable: false })
  operate!: number;

  @CreateDateColumn({
    type: 'datetime',
    precision: 3,
    default: () => 'CURRENT_TIMESTAMP(3)',
    transformer: {
      // 日期格式转换
      to: (value: Date) => value,
      from: (value: string) => moment(value).format('YYYY-MM-DD HH:mm:ss'),
    },
  })
  create_time!: Date;

  @UpdateDateColumn({
    type: 'datetime',
    precision: 3,
    default: () => 'CURRENT_TIMESTAMP(3)',
    onUpdate: 'CURRENT_TIMESTAMP(3)',
    transformer: {
      // 日期格式转换
      to: (value: Date) => value,
      from: (value: string) => moment(value).format('YYYY-MM-DD HH:mm:ss'),
    },
  })
  update_time!: Date;
}
