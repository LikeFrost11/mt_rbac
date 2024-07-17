import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Transform } from 'class-transformer';
import moment from 'moment';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'user_name' })
  userName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ name: 'enterprise_id' })
  enterpriseId!: number;

  @Column({ name: 'group_id' })
  groupId!: number;

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
