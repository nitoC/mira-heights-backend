import { Injectable } from '@nestjs/common';
// import room_type from './mockData/room_type';
import { rooms } from './mockData/roomMain';
import { IRoom } from './interface/room';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from 'src/entitities/room.entity';
import { Repository } from 'typeorm';
import { RoomTypeEntity } from 'src/entitities/roomType.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomEntity: Repository<RoomEntity>,
    @InjectRepository(RoomTypeEntity)
    private readonly roomTypeEntity: Repository<RoomTypeEntity>,
  ) {}

  async findAllType() {
    const types = await this.roomTypeEntity.find({ relations: ['room'] });
    return types;
    // console.log(val, 'val');
  }
  async findAll() {
    let val = await this.roomEntity.find();
    return val;
    // console.log(val, 'val');
  }
  async findOne(id: string) {
    console.log(id, 'in service');
    const res = await this.roomTypeEntity.findOne({
      where: { id },
      relations: ['room'],
    });
    return res;
    // return rooms.find((room, index) => {
    //   console.log(room);
    //   console.log(room.id === id);
    //   return room.id === Number(id);
    // });
  }
  findBy(query, val) {
    return rooms.find((room, index) => room[query] === val);
  }
  updateOne(id: number | string, updateData: any) {
    // let roomUpdate = rooms.find((room, index) => room.id === id);
    // return { ...roomUpdate, ...updateData };
  }
}
