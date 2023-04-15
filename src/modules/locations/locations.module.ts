import { Module } from '@nestjs/common';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';
import { locationProviders } from './location.provider';

@Module({
  controllers: [LocationsController],
  providers: [LocationsService, ...locationProviders],
})
export class LocationsModule {}
