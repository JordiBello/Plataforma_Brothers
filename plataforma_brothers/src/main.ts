import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

// Para ejecutar npm run start:dev (el dev actualiza con los cambios)
// Para limpiar y arreglar código npm run format y npm run lint (format es mejor)


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
