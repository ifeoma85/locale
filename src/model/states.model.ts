import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatesController } from '../states/states.controller';
import { statesService } from '../states/states.service';
import { statesSchema } from '../schema/states.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'states', schema: statesSchema }])],
  controllers: [StatesController],
  providers: [statesService],
})
export class statesModule {}
