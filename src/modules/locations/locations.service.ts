import { Inject, Injectable } from '@nestjs/common';
import { LOCATION_REPOSITORY } from '../../core/constants';

@Injectable()
export class LocationsService {
  selectable = ['id', 'name', 'open_hour', 'close_hour'];

  constructor(
    @Inject(LOCATION_REPOSITORY)
    private readonly locationRepository: typeof Location,
  ) {}
}
