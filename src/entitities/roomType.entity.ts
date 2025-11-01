import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoomEntity } from './room.entity';

@Entity('room_types')
export class RoomTypeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  room_type: string;

  @Column()
  price: number;

  @Column()
  available: boolean;

  @Column()
  description: string;

  @OneToMany(() => RoomEntity, (RoomEntity) => RoomEntity.room_type)
  room: RoomEntity;
}
