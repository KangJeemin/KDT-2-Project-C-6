import { Module } from '@nestjs/common';
import {AppController,NaverController } from './app.controller';
import { AppService, NaverAPI} from './app.service';

@Module({
  imports: [],
  controllers: [AppController,NaverController],
  providers: [AppService,NaverAPI],
})
export class AppModule {}
