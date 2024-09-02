import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMama(): string {
    return 'Hello mama shlyxa!';
  }


}
