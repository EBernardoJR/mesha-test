import { statusType } from '../../shared/enums/order.enum';
import { Order } from '../../core/domain/entities/order.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class OrderEntity extends BaseEntity implements Order {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  description: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  value: string;

  @ManyToOne((type) => UserEntity, (user) => user.orders)
  user_id: string;

  @Column({ nullable: false })
  status: statusType;
}
