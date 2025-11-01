import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://mira-heights-backend-g71r.onrender.com/',
    ],
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
  console.log(`listening to port: ${process.env.PORT ?? 3000}`);
}
bootstrap();
