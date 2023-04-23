import { Repository } from 'typeorm';
import { OrderEntity } from '../entities/order.entity';
import { OrderRepositoryBase } from '../../core/domain/repositories/order.repository';
import { Order } from '../../core/domain/entities/order.entity';

export class OrderRepository
  extends Repository<OrderEntity>
  implements OrderRepositoryBase
{
  async createData(user: Order): Promise<OrderEntity> {
    const data = this.create(user);
    await data.save();
    return data;
  }

  async getOne(filter: Partial<OrderEntity>): Promise<OrderEntity> {
    return await this.findOne({
      where: {
        user_id: filter.user_id,
      },
    });
  }

  async getManyByUser(filter: Partial<OrderEntity>): Promise<OrderEntity[]> {
    return await this.find({
      where: {
        user_id: filter.user_id,
      },
    });
  }

  async getById(id: string): Promise<OrderEntity> {
    return await this.findOne({
      where: {
        id,
      },
    });
  }

  async getAll() {
    return this.find();
  }

  async delete(id: string) {
    return this.delete(id);
  }

  async update(id: string, data: OrderEntity) {
    return this.update(id, data);
  }
}
