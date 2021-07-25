import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { jwtMiddleware } from './jwt/jwt.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  app.use(jwtMiddleware);   // 특정 구간에서 쓰고 싶으면 경로를 지정해줘야 하는데, consumer 방식으로 넣어야 함. #5.6 강의 참고.
}
bootstrap();
