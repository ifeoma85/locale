import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRegionsDto } from './dto/create-regions.dto';
import { UpdateRegionsDto } from './dto/update-regions.dto';
import { regions } from '../schema/regions.schema';
import { Model } from 'mongoose';
import { Query } from 'express-serve-static-core';
export type Regions = any;

@Injectable()
export class regionsService {
  constructor(@InjectModel('regions') private readonly regionsModel: Model<regions>) {}
   
  async findAll(query: Query): Promise<regions[]> {
    const keyword = query.keyword 
    ? {
      Region: {
        $regex: query.keyword,
        $options: 'i',
      }
    } : {};
    const regions = await this.regionsModel.find({ ...keyword});
    return regions;
  }

  async findOne(LGAs: string): Promise<regions> {
    return await this.regionsModel.findById(LGAs).exec();
  }


  async create(regions: string): Promise<regions> {
    const newregions = new this.regionsModel(regions);
    return await newregions.save();
  }

  async delete(_id: string): Promise<regions> {
    return await this.regionsModel.findByIdAndDelete(_id);
  }

  async update(_id: string, regions: |regions): Promise<regions> {
   return await this.regionsModel.findByIdAndUpdate(_id, regions, { new: true });
  } 
}