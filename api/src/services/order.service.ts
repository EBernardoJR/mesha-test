import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exception } from 'src/utils/exceptions';
import { OrderMapper } from 'src/core/domain/mappers/order.mapper';
import { OrderRepository } from 'src/infra/repositories/order.repository';
import { OrderEntity } from 'src/infra/entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private orderMapper: OrderMapper,
    private exception: Exception,
  ) {}

  async getAll() {
    return this.orderRepository.getAll();
  }
}
