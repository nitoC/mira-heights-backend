import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SeederService } from 'src/seeder/seeder.service';
import { commonData } from 'src/common/mockdata/common';
import { rooms } from 'src/room/mockData/roomMain';
import { room_types } from 'src/room/mockData/room_type';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const seeder = await app.get(SeederService);
  await seeder.seedCommon(commonData);
  await seeder.seedRoomType(room_types);
  await seeder.seedRoom(rooms);

  await app.listen(process.env.PORT ?? 3000);
  console.log(`listening to port: ${process.env.PORT ?? 3000}`);
}
bootstrap();
