import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderSchema } from './dto/order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/entitities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}

  async create(data: any) {
    try {
      const isValid = OrderSchema.parse(data);
      console.log(isValid, 'is valid');
      console.log(data);
      let order = this.orderRepository.create(data);
      const res = await this.orderRepository.save(order);

      console.log(res, 'response');
      return data;
    } catch (err) {
      console.error(err);
      throw new BadRequestException('invalid data format');
    }
  }
  findAll() {}
  findOne() {}
}
