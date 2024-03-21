import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './auth/auth.guard';

import * as dotenv from "dotenv"
import { NestExpressApplication } from '@nestjs/platform-express';
dotenv.config()
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useGlobalGuards(new AuthGuard());
  await app.listen(3020);
}
bootstrap();
