import { Module } from '@nestjs/common';
import { statesService } from './states.service';
import { StatesController } from './states.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { states, statesSchema } from '../schema/states.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: states.name, schema: statesSchema}])
  ],
  controllers: [StatesController],
  providers: [statesService],
})
export class StatesModule {}
