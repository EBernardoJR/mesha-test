import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { AuthModule } from './auth.module';
import { UserEntity } from 'src/infra/entities/user.entity';
import { UserRepository } from 'src/infra/repositories/user.repository';
import { UserMapper } from 'src/core/domain/mappers/user.mapper';
import { Exception } from 'src/utils/exceptions';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    forwardRef(() => AuthModule),
  ],
  providers: [UserService, UserMapper, Exception, UserRepository],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
