import {
  UnauthorizedException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

export class Exception {
  unauthorizedException(message: any) {
    // add your tailored logic here
    throw new UnauthorizedException({
      message,
    });
  }

  badRequestException(message: any) {
    // add your tailored logic here
    throw new BadRequestException({
      message,
    });
  }

  internalServerErrorException(message: any) {
    // add your tailored logic here
    throw new InternalServerErrorException({
      message,
    });
  }
}
