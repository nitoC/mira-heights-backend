import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonEntity } from 'src/entitities/common.entity';
import { RoomEntity } from 'src/entitities/room.entity';
import { RoomTypeEntity } from 'src/entitities/roomType.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommonEntity, RoomEntity, RoomTypeEntity]),
  ],
  providers: [SeederService],
})
export class SeederModule {}
