import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantResolver } from './restaurant.resolver';
import { RestaurantService } from './restaurants.service';

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant])],  // forFeature는 TypeOrmModule가 특정 feature를 import 할 수 있게 해줌.
    providers:[RestaurantResolver, RestaurantService]
})
export class RestaurantModule {}
