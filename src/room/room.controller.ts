import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get('all')
  findAll() {
    return this.roomService.findAll();
  }
  @Get('types')
  findAllType() {
    return this.roomService.findAllType();
  }
  @Get(':id')
  findById(@Param() { id }) {
    console.log('finding one', id);
    let res = this.roomService.findOne(id);
    console.log(res);
    return res;
  }
}
