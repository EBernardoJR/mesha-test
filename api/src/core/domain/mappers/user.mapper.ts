import { Mapper } from 'src/core/base/mapper';
import { CreateUserDto } from '../../../shared/dtos/user/createUser.dto';
import { User } from 'src/core/domain/entities/user.entity';

export class UserMapper extends Mapper<CreateUserDto, User> {
  public async create(data: CreateUserDto): Promise<User> {
    const user = new User();

    user.name = data.name;
    user.email = data.email;
    user.password = data.password;
    user.phone = data.phone;
    user.type = data.type;
    user.gender = data.gender;
    user.age = data.age;

    return user;
  }

  public get(data: User): CreateUserDto {
    const user = new CreateUserDto();

    user.name = data.name;
    user.email = data.email;
    user.password = data.password;
    user.phone = data.phone;
    user.type = data.type;

    return user;
  }
}
