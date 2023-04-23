import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { AuthService } from '../services/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../controllers/auth.controller';
import { JwtStrategy } from 'src/config/auth/strategy/jwt.strategy';
import { Exception } from 'src/utils/exceptions';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: '.env',
});

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
    }),
  ],
  providers: [AuthService, JwtStrategy, Exception],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
