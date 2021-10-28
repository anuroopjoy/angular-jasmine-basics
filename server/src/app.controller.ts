import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  login(@Body() body: { username: string; password: string }): boolean {
    return this.appService.login(body);
  }

  @Get('cities')
  getCities(): { name: string; image: string; alt: string }[] {
    return this.appService.getCities();
  }
}
