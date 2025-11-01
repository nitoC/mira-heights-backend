import { RoomEntity } from 'src/entitities/room.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  username: string;
  @Column()
  phone: string;
  @Column({ nullable: true })
  email: string;

  @OneToOne(() => RoomEntity, (RoomEntity) => RoomEntity.order)
  room: string;
}
