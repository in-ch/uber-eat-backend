import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtMiddleware } from './jwt/jwt.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  // app.use(JwtMiddleware);   // 특정 구간에서 쓰고 싶으면 경로를 지정해줘야 하는데, consumer 방식으로 넣어야 함. #5.6 강의 참고.
                               // 근데 이게 function 만 가능해서 결국 못 씀.. 
}
bootstrap();
