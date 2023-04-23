import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from 'src/shared/dtos/user/createUser.dto';
import { Exception } from 'src/utils/exceptions';
import { AuthService } from '../services/auth.service';
import { JwtAuthGuard } from 'src/config/auth/guard/jwt-auth.guard';
import { UserEntity } from 'src/infra/entities/user.entity';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    const data = await this.userService.signup(body);
    const { access_token } = await this.authService.login({
      email: body.email,
      password: body.password,
    });

    delete data.password;
    return {
      ...data,
      access_token,
    };
  }
  @UseGuards(JwtAuthGuard)
  @Get('/architects')
  async getArchitects(): Promise<UserEntity[]> {
    return this.userService.getArchitects();
  }
}
