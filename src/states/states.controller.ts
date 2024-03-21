import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { statesService } from './states.service';
import { states } from '../schema/states.schema'
import { CreateStatesDto } from './dto/create-states.dto';
import { UpdateStatesDto } from './dto/update-states.dto';
import { Query } from 'express-serve-static-core';
@Controller('states')
export class StatesController {
  constructor(private readonly statesService: statesService) {}

    @Get()
  async findAllStates(query: Query) {
    return await this.statesService.findAll(query);
  }
  @Post()
  async create(@Body('_id') _id: string, @Body() createStatesDto: CreateStatesDto) {
    return await this.statesService.create(_id);
  }

  @Get('LGAs')
  async findOne(@Param('LGAs') LGAs: string): Promise<states> {
    return await this.statesService.findOne(LGAs);
  }

  @Patch(':id')
  update(@Param('_id') _id: string, @Body() createStatesDto:  CreateStatesDto) {
    return this.statesService.update(_id, createStatesDto);
  }

  // @Delete('_id')
  // delete(@Param('_id') _id: string) {
  // return this.statesService.findByIdAndDelete(_id);
  // }
}
