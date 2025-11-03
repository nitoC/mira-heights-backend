import { BadRequestException } from '@nestjs/common';
import { RoomEntity } from 'src/entitities/room.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  full_name: string;
  @Column()
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  amount: number;

  @Column({ default: 'NAIRA', nullable: true })
  currency: string;

  @Column({ default: 'pending' })
  payment_status: 'unpaid' | 'paid' | 'refunded' | 'processing';

  @Column()
  total_amount: number;

  @Column({ type: 'timestamp' })
  checkin: Date;

  @Column({ type: 'timestamp' })
  checkout: Date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @Column({ default: 'pending' })
  status:
    | 'pending'
    | 'confirmed'
    | 'cancelled'
    | 'checked_in'
    | 'checked_out'
    | 'error';

  @OneToOne(() => RoomEntity, (RoomEntity) => RoomEntity.order)
  room: string;

  @BeforeInsert()
  @BeforeUpdate()
  validateDate() {
    if (this.checkin >= this.checkout)
      throw new BadRequestException('invalid checkin dates');
  }
}
