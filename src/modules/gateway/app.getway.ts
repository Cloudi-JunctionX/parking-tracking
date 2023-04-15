import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway(3006, { cors: true })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('MessageGateway');

  afterInit(server: any): any {
    this.logger.log(server, 'Init');
  }

  async handleConnection(client: Socket) {
    const locationId = client.handshake.query.locationId;
    this.logger.log(client.id + ' Connected..............................');
  }

  async handleDisconnect(client: Socket) {
    this.logger.log(client.id + ' Disconnect ...........');
  }
}
