import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegionsController } from '../regions/regions.controller';
import { regionsService } from '../regions/regions.service';
import { regionsSchema } from '../schema/regions.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'regions', schema: regionsSchema }])],
  controllers: [RegionsController],
  providers: [regionsService],
})
export class regionsModule {}
