import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt-nodejs';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../infra/repositories/user.repository';
import { CreateUserDto } from 'src/shared/dtos/user/createUser.dto';
import { UserEntity } from 'src/infra/entities/user.entity';
import { Exception } from 'src/utils/exceptions';
import { UserMapper } from 'src/core/domain/mappers/user.mapper';
import { userTypes } from 'src/shared/enums/users.enum';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private userMapper: UserMapper,
    private exception: Exception,
  ) {}

  private hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  public async signup(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      const emailAlreadyUsed = await this.userRepository.getOne(createUserDto);
      if (emailAlreadyUsed) {
        this.exception.badRequestException('Email já está sendo utilizado');
      }
      const data: CreateUserDto = {
        ...createUserDto,
        password: await this.hashPassword(createUserDto.password),
      };
      const user = await this.userMapper.create(data);

      return this.userRepository.createData(user);
    } catch (e) {
      this.exception.internalServerErrorException(e);
    }
  }

  public async getUserByEmail(email: string): Promise<UserEntity> {
    try {
      return this.userRepository.getOne({
        email,
      });
    } catch (e) {
      this.exception.internalServerErrorException(e);
    }
  }

  public async getArchitects() {
    try {
      return this.userRepository.getGeneric({
        where: {
          type: userTypes.architect,
        },
      });
    } catch (e) {
      this.exception.internalServerErrorException(e);
    }
  }
}
