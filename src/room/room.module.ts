import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomEntity } from 'src/entitities/room.entity';
import { RoomTypeEntity } from 'src/entitities/roomType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity, RoomTypeEntity])],
  providers: [RoomService],
  controllers: [RoomController],
})
export class RoomModule {}
