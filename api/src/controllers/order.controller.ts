import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { Exception } from 'src/utils/exceptions';
import { OrderService } from 'src/services/order.service';

@Controller('order')
export class OrderController {
  private exception = new Exception();
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async get() {
    return this.orderService.getAll();
  }
}
