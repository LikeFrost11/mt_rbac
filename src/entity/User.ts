import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import moment from 'moment';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'user_name' })
  user_name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ name: 'enterprise_id' })
  enterprise_id!: number;

  @Column({ name: 'group_id' })
  group_id!: number;

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
