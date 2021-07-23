import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver()
export class RestaurantResolver {
  @Query(_ => Restaurant)
  myRestaurant() {
    return true;
  }
  @Query(_=> [Restaurant])
  restaurant(@Args('veganOnly') vegaOnly: boolean):Restaurant[]{
    return [];
  }
}