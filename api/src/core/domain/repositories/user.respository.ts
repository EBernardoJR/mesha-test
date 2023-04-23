import { Repository } from '../../base/repository';
import { User } from '../entities/user.entity';

export abstract class UserRepositoryBase extends Repository<User> {}
