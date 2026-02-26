import { Controller, Get } from '@nestjs/common';
import { RisksService } from './risks.service';

@Controller('risks')
export class RisksController {
  constructor(private readonly risksService: RisksService) {}

  @Get()
  findAll() {
    return this.risksService.findAll();
  }
}