import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/createRestaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';

@Resolver()
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(_ => Restaurant)
  myRestaurant() {
    return true;
  }
  @Query(_=> [Restaurant])
  restaurant(): Promise<Restaurant[]>{
    return this.restaurantService.getAll();
  }

  @Mutation(_ => Boolean)
  createRestaurant(@Args() createRestaurantInput:CreateRestaurantDto): boolean{
      console.log(createRestaurantInput);
      return true;
  }
}