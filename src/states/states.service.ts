import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStatesDto } from './dto/create-states.dto';
import { UpdateStatesDto } from './dto/update-states.dto';
import { states } from '../schema/states.schema';
import { Model } from 'mongoose';
import { Query } from 'express-serve-static-core';
export type States = any;


@Injectable()
 export class statesService {
    constructor(@InjectModel('states') private readonly statesModel: Model<states>) {}
   
    async findAll(query: Query): Promise<states[]> {
      const keyword = query.keyword 
      ? {
        State: {
          $regex: query.keyword,
          $options: 'i',
        }
      } : {};
      const states = await this.statesModel.find({ ...keyword});
      return states;
    }
  
    async findOne(LGAs: string): Promise<states> {
      return await this.statesModel.findById(LGAs).exec();
    }
  
    async create(States: string): Promise<states> {
      const newStates = new this.statesModel(States);
      return await newStates.save();
    }
    async delete(_id: string): Promise<states> {
      return await this.statesModel.findByIdAndDelete(_id);
    }
  
    async update(_id: string, States: |states): Promise<states> {
     return await this.statesModel.findByIdAndUpdate(_id, States, { new: true });
    } 
 }