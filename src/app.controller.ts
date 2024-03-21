import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';

@Controller( )
// @UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): object {
    return this.appService.getHello();
  }

  @Get('login')
  login(): {username: string, email: string, password: string} {
    return {username: 'Ifeoma Ugwu', email: 'ifeomaugwu85@gmail.com', password: 'Eunice85'};
  }

@Get('test')
@UseGuards(AuthGuard)
test(): string {
  return 'This is a Test Route';
}
}