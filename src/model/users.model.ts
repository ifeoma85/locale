import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {UsersController } from '../users/users.controller';
import { UsersService } from '../users/users.service';
import { usersSchema } from '../schema/users.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: usersSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}