import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  create(data: any) {
    console.log(data);
    return data;
  }
}
