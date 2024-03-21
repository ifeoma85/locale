import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
// import { ApiKeysModule } from 'nestjs-api-keys';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
// import { RolesGuard } from './auth/roles.guard';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users/users.service';
import { StatesModule } from './states/states.module';
import { RegionsModule } from './regions/regions.module';


@Module({
  imports: [
    UsersModule,
    // ApiKeysModule.register({
    // apiKeys: [String] = JSON.parse(process.env.API_KEYS_JSON_STRING),
    // }),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    
    }]),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    // MongooseModule.forFeature([{ name: 'users', schema: 'schemaUsers'}]),
    // MongooseModule.forFeature([{ name: 'states', schema: 'schemaStates'}]),
    UsersModule,
    StatesModule,
    RegionsModule
  ],
  controllers: [AppController, UsersController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    ],
})
export class AppModule {}
