import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonController } from './common.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonEntity } from 'src/entitities/common.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommonEntity])],
  providers: [CommonService],
  controllers: [CommonController],
})
export class CommonModule {}
