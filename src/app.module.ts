import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurantModule } from './restaurant/restaurant.module';
import {TypeOrmModule} from "@nestjs/typeorm";
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost',
      port: 5432,
      username: 'seonginch',
      password: 'test',  // postgres 모드에서는 host가 localhost일 때 password를 잘못 적어도 된다.
      database: 'uber-eat',
      synchronize: true,
      logging: true,
    }),
    RestaurantModule, // GraphQL 불러오기.
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
