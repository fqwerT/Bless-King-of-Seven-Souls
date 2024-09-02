import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsocketsGateway } from './events.gateway';

@Module({
  imports: [],
  // controllers: [AppController],
  providers: [WebsocketsGateway],
})
// AppService,
export class AppModule {}
