
import { Controller, Get } from '@nestjs/common';
import { AppService,NaverAPI } from './app.service';


@Controller('users')
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): string {
    return this.appService.getUsers();
  }
}
@Controller('API')
export class NaverController {
  constructor(private readonly appService: NaverAPI) {}

  @Get()
  getAPI(): string {
    return this.appService.getAPI();
  }
}