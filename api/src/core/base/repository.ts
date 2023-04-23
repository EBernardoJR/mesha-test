import { Entity } from './entity';

export abstract class Repository<TEntity extends Entity> {
  abstract createData(data: Partial<TEntity>): Promise<TEntity>;
  abstract update(id: string, data: TEntity): Promise<any>;
  abstract getById(id: string): Promise<TEntity>;
  abstract getOne(filter: Partial<TEntity>): Promise<TEntity>;
  abstract delete(id: string): Promise<any>;
}
