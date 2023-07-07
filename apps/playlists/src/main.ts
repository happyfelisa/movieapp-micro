import { NestFactory } from '@nestjs/core';
import { PlaylistsModule } from './playlists.module';

async function bootstrap() {
  const app = await NestFactory.create(PlaylistsModule);
  await app.listen(3102);
}
bootstrap();
