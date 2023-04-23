import { FindManyOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserRepositoryBase } from 'src/core/domain/repositories/user.respository';
import { User } from '../../core/domain/entities/user.entity';

export class UserRepository extends UserRepositoryBase {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {
    super();
  }

  async createData(user: User): Promise<UserEntity> {
    const data = this.repository.create(user);
    await data.save();
    return data;
  }

  async getOne(filter: Partial<UserEntity>): Promise<UserEntity> {
    const data = await this.repository.findOne({
      where: {
        email: filter.email,
      },
    });
    return data;
  }

  async getById(id: string): Promise<UserEntity> {
    return await this.repository.findOne({
      where: {
        id,
      },
    });
  }

  async getGeneric(filter: FindManyOptions<UserEntity>) {
    return await this.repository.find(filter);
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }

  async update(id: string, data: UserEntity) {
    return this.repository.update(id, data);
  }
}
