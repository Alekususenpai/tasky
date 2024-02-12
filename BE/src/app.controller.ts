import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/hello')
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Post('/name')
  async create(@Body() name: any) {
    console.log(name, 'name')
    return 'Post request';
  }
}
