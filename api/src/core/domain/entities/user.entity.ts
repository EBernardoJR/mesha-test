import { Entity } from '../../base/entity';
import { userTypes } from '../../../shared/enums/users.enum';

export class User extends Entity {
  email: string;

  name: string;

  password: string;

  phone: string;

  gender: string;

  age: string;

  type: userTypes;
}
