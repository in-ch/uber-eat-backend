import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/createRestaurant.dto';
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

  @Mutation(_ => Boolean)
  createRestaurant(@Args() createRestaurantInput:CreateRestaurantDto): boolean{
      console.log(createRestaurantInput);
      return true;
  }
}