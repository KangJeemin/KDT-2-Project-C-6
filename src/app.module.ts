import { Module } from '@nestjs/common';
import {UsersController,NaverController } from './app.controller';
import { AppService, NaverAPI} from './app.service';

@Module({
  imports: [],
  controllers: [UsersController,NaverController],
  providers: [AppService,NaverAPI],
})
export class AppModule {}
