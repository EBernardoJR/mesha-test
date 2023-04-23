import { statusType } from '../../../shared/enums/order.enum';
import { Entity } from '../../base/entity';

export class Order extends Entity {
  title: string;

  description: string;

  user_id: string;

  value: string;

  status: statusType;
}
