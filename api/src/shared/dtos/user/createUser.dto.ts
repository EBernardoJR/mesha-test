import { userTypes } from '../../enums/users.enum';

export class CreateUserDto {
  email: string;

  name: string;

  password: string;

  phone: string;

  gender: string;

  age: string;

  type: userTypes;
}
