import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from 'path';
import { OrderEntity } from 'src/infra/entities/order.entity';
import { UserEntity } from 'src/infra/entities/user.entity';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: '.env',
});

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [UserEntity, OrderEntity],
  synchronize: true,
};
