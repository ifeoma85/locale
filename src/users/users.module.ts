import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PassportModule } from '@nestjs/passport';
import { ApiKeyStrategy} from './apiKey.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { usersSchema } from 'src/schema/users.schema';
import { ApiKeysModule } from 'nestjs-api-keys';

@Module({
  imports: [PassportModule,
    MongooseModule.forFeature([{ name: "users", schema: usersSchema}])
  ],
  providers: [UsersService, ApiKeyStrategy],
  exports: [UsersService,
  ],
})
export class UsersModule {}
