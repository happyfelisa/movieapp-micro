import { NestFactory } from '@nestjs/core';
import { UsermsModule } from './userms.module';

async function bootstrap() {
  const app = await NestFactory.create(UsermsModule);
  await app.listen(3101);
}
bootstrap();
