import { statusType } from '../../enums/order.enum';

export class CreateOrderDto {
  title: string;

  value: string;

  user_id: string;

  description: string;

  status: statusType;
}
