import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { UsersModule } from 'src/users/users.module';
import { AppModule } from 'src/app.module';

@Module({
  imports: [
    UsersModule,
    AppModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
