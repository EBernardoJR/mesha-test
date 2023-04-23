import { Mapper } from 'src/core/base/mapper';
import { CreateOrderDto } from 'src/shared/dtos/order/createOrder.dto';
import { Order } from '../entities/order.entity';

export class OrderMapper extends Mapper<CreateOrderDto, Order> {
  public async create(data: CreateOrderDto): Promise<Order> {
    const order = new Order();

    order.title = data.title;
    order.description = data.description;
    order.status = data.status;
    order.value = data.value;
    order.user_id = data.user_id;

    return order;
  }

  public get(data: Order): CreateOrderDto {
    const order = new CreateOrderDto();

    order.title = data.title;
    order.description = data.description;
    order.status = data.status;
    order.value = data.value;
    order.user_id = data.user_id;

    return order;
  }
}
