import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';

@Controller('book')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() order: OrderDto) {
    const val = this.orderService.create(order);
    return val;
  }
}
