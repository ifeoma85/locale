import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { regionsService } from './regions.service';
import { regions } from '../schema/regions.schema';
import { CreateRegionsDto } from './dto/create-regions.dto';
import { UpdateRegionsDto } from './dto/update-regions.dto';
import { Query } from 'express-serve-static-core';

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: regionsService) {}

  @Get()
  async findAllRegions(query: Query) {
    return await this.regionsService.findAll(query);
  }
  @Post()
  async create(@Body('_id') _id: string, @Body() createRegionsDto: CreateRegionsDto) {
    return await this.regionsService.create(_id);
  }

  @Get('States')
  async findOne(@Param('States') States: string): Promise<regions> {
    return await this.regionsService.findOne(States);
  }

  @Patch(':id')
  update(@Param('_id') _id: string, @Body() createRegionsDto:  CreateRegionsDto) {
    return this.regionsService.update(_id, createRegionsDto);
  }

//   @Delete('_id')
//   delete(@Param('_id') _id: string) {
//   return this.regionsService.findByIdAndDelete(_id);
// }
}
