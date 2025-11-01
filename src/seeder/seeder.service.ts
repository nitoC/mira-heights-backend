import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonEntity } from 'src/entitities/common.entity';
import { RoomEntity } from 'src/entitities/room.entity';
import { RoomTypeEntity } from 'src/entitities/roomType.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(CommonEntity)
    private readonly common: Repository<CommonEntity>,
    @InjectRepository(RoomEntity) private readonly room: Repository<RoomEntity>,
    @InjectRepository(RoomTypeEntity)
    private readonly roomType: Repository<RoomTypeEntity>,
  ) {}

  async seedRoomType(roomTypes) {
    let count = await this.roomType.count();

    try {
      if (count > 0) {
        return console.log('room types already populated');
      }
      const res = this.roomType.create(roomTypes);
      console.log(res);
      const val = this.roomType.save(res);
      console.log(val, 'seeding success: room_type');
    } catch (err) {
      console.log(err);
    }
  }

  async seedRoom(rooms) {
    let count = await this.room.count();

    try {
      // if (count > 0) {
      //   return console.log('rooms already populated');
      // }
      const res = this.room.create(rooms);
      console.log(res);
      const val = this.room.save(res);
      console.log(val, 'seeding success: room');
    } catch (err) {
      console.log(err);
    }
  }
  async seedCommon(data) {
    let count = await this.common.count();
    try {
      if (count > 0) {
        return console.log('common already has resources');
      }
      const res = this.common.create(data);
      console.log(res);
      const val = this.common.save(res);
      console.log(val, 'seeding success: common');
    } catch (err) {
      console.log(err);
    }
  }
}
