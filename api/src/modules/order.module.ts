import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from 'src/services/order.service';
import { OrderController } from 'src/controllers/order.controller';
import { OrderEntity } from 'src/infra/entities/order.entity';
import { OrderMapper } from 'src/core/domain/mappers/order.mapper';
import { Exception } from 'src/utils/exceptions';
import { OrderRepository } from 'src/infra/repositories/order.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrderRepository])],
  providers: [OrderService, OrderMapper, Exception],
  exports: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
