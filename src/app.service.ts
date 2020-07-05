import { Injectable, Body, ValidationPipe } from '@nestjs/common';
import { CreatePartDto } from './app.dto';

@Injectable()
export class AppService {
  createPart(dto: CreatePartDto) {
    return dto;
  }
}
