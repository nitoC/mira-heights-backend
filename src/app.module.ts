import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { OrderModule } from './order/order.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CommonModule } from './common/common.module';
import { SeederModule } from './seeder/seeder.module';
import { RoomEntity } from './entitities/room.entity';
import { CommonEntity } from './entitities/common.entity';
import { OrderEntity } from './entitities/order.entities';
import { RoomTypeEntity } from './entitities/roomType.entity';

@Module({
  imports: [
    RoomModule,
    OrderModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',

          ssl: {
            rejectUnauthorized: false,
          },
          url: configService.get<string>('CONN_URI'),
          synchronize: true,
          autoLoadEntities: true,
          entities: [RoomEntity, CommonEntity, OrderEntity, RoomTypeEntity],
        };
      },
    }),
    CommonModule,
    SeederModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  constructor(private readonly datasource: DataSource) {}

  async onModuleInit() {
    try {
      this.datasource.isInitialized && this.logger.log('db connected');
    } catch (err) {
      this.logger.log('db connection error', err);
    }
  }
}
