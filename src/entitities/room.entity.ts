import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { z } from 'zod';
import { OrderEntity } from './order.entity';
import { RoomTypeEntity } from './roomType.entity';

@Entity('rooms')
export class RoomEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', array: true })
  imageUrl: string[];

  @Column()
  room_number: number;
  @Column()
  available: boolean;

  @Column()
  tag: string;

  @OneToOne(() => OrderEntity, (OrderEntity) => OrderEntity.room)
  order: string;

  @ManyToOne(() => RoomTypeEntity, (RoomTypeEntity) => RoomTypeEntity.room_type)
  room_type: RoomTypeEntity[];
}
