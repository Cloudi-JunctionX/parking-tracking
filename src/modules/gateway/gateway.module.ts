import { Module } from '@nestjs/common';
import { AppGateway } from './app.getway';

@Module({
  providers: [AppGateway],
})
export class GatewayModule {}
