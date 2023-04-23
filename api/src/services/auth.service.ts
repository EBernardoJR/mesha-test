import { Injectable } from '@nestjs/common';
import { LoginDto } from '../shared/dtos/auth/login.dto';
import * as bcrypt from 'bcrypt-nodejs';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { PayloadDto } from '../shared/dtos/auth/payload.dto';
import { UserEntity } from 'src/infra/entities/user.entity';
import { Exception } from 'src/utils/exceptions';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private exception: Exception,
  ) {}

  private async validatePassword(
    user: UserEntity,
    pass: string,
  ): Promise<boolean> {
    const isMatched = await bcrypt.compareSync(
      pass.toString(),
      user.password.toString(),
    );
    if (isMatched) {
      return true;
    }
    return false;
  }

  async login(
    loginDto: LoginDto,
  ): Promise<{ access_token: string; user: UserEntity }> {
    try {
      if (!loginDto.email || !loginDto.password) {
        this.exception.badRequestException('Campos incompletos');
      }
      const user = await this.userService.getUserByEmail(loginDto.email);
      if (!user) {
        this.exception.badRequestException('Usuário não encontrado');
      }
      const passwordsMatch = await this.validatePassword(
        user,
        loginDto.password,
      );
      if (!passwordsMatch) {
        this.exception.unauthorizedException('Senha incorreta');
      }

      delete user.password;

      const payload: PayloadDto = {
        email: user.email,
        id: user.id,
      };
      return {
        access_token: this.jwtService.sign(payload),
        user,
      };
    } catch (e) {
      this.exception.badRequestException(e);
    }
  }
}
