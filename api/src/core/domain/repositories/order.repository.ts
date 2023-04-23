import { Repository } from '../../base/repository';
import { Order } from '../entities/order.entity';

export abstract class OrderRepositoryBase extends Repository<Order> {}
