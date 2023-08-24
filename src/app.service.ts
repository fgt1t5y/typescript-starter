import { Injectable } from '@nestjs/common';
import { hello } from './hello';

@Injectable()
export class AppService {
  getHello(): string {
    return hello;
  }
}
