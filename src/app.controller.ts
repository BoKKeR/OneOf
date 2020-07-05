import { Controller, Get, ValidationPipe, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePartDto } from './app.dto';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  createPartController(@Body(ValidationPipe) dto: CreatePartDto) {
    return this.appService.createPart(dto);
  }
}
