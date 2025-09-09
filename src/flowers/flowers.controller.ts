import { Controller, Get, Query } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/pipe';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) { 
    console.log(pageNumber)
    return this.flowersService.findAll();
  }
}
