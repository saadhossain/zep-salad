import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('register')
  async registerUser(
    @Body() userInfo: CreateUserDto
  ) {
    const data = await this.usersService.registerUser(userInfo);
    return { status: 'success', data };
  }

  @Get('admin')
  async getAdmins() {
    const data = await this.usersService.getAllAdmins();
    return { status: 'success', data }
  }
}
