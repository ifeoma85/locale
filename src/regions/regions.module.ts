import { Module } from '@nestjs/common';
import { regionsService } from './regions.service';
import { RegionsController } from './regions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { regions, regionsSchema } from '../schema/regions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: regions.name, schema: regionsSchema}])
  ],
  controllers: [RegionsController],
  providers: [regionsService],
})
export class RegionsModule {}
