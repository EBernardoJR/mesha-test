import {
  BaseEntity,
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { User } from '../../core/domain/entities/user.entity';
import { userTypes } from '../../shared/enums/users.enum';
import { OrderEntity } from './order.entity';

@Entity()
@Unique(['email'])
export class UserEntity extends BaseEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: false })
  age: string;

  @Column({ nullable: false })
  type: userTypes;

  @OneToMany((type) => OrderEntity, (order) => order.user_id)
  orders?: OrderEntity[];
}
