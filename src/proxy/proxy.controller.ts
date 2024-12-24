import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { ProxyService } from './proxy.service';

@Controller('proxy/users')  // Ensure this path is correct
export class ProxyController {
  constructor(private readonly proxyService: ProxyService) {}

  @Get()
  async getUsers(@Res() res) {
    const users = await this.proxyService.getUsers();
    return res.status(HttpStatus.OK).json(users);
  }

  @Post()
  async createUser(@Body() body, @Res() res) {
    const newUser = await this.proxyService.createUser(body);
    return res.status(HttpStatus.CREATED).json(newUser);
  }
}
