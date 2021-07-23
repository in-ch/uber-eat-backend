import { Module } from '@nestjs/common';
import * as Joi from "joi";

import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurantModule } from './restaurant/restaurant.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === "dev" ? '.env.dev' : '.env.test',  // node_env 모드가 dev일 경우 env.dev가 실행
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({  // joi를 활용하여 유효성 검사
        NODE_ENV: Joi.string().valid('dev','prod').required(),  // 이렇게 함으로써 환경 변수 마저 유효성 검사를 할 수 있음.
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      })
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,  // port는 number가 와야하기 때문에 +를 붙여서 강제 형변환을 했다.
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,  // postgres 모드에서는 host가 localhost일 때 password를 잘못 적어도 된다.
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
    }),
    RestaurantModule, // GraphQL 불러오기.
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
