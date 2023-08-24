import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('create')
  async create(@Query() userData: CreateUserDTO) {
    return this.userService.create(userData);
  }
}
