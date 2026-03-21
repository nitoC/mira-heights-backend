import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://www.miraheightsng.com',
      'https://miraheightsng.com',
      'https://mira-heights-t8ge-git-codex-update-topwr-d0a006-nitocs-projects.vercel.app/',
      'https://mira-heights.vercel.app/',
      '*'
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
  console.log(`listening to port: ${process.env.PORT ?? 3000}`);
}
bootstrap();
