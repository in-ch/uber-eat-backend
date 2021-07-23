import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/createRestaurant.dto';
import { UpdateRestaurantDto, UpdateRestaurantInputType } from './dtos/updateRestaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';

@Resolver()
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(_=> [Restaurant])
  restaurant(): Promise<Restaurant[]>{
    return this.restaurantService.getAll();
  }

  @Mutation(_ => Boolean)
  async createRestaurant(
    @Args('input') createRestaurantInput:CreateRestaurantDto
  ): Promise<boolean>{
    try{
      await this.restaurantService.createResturant(createRestaurantInput);
      return true;
    } catch(e){
      console.log(e);
      return false;
    }
  }

  @Mutation(_ => Boolean)
  async updateRestaurant(
    @Args('input') updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<boolean> {
    try{
      await this.restaurantService.updateResturant(updateRestaurantDto);
      return true;
    } catch (e){
      console.log(e);
      return false;
    }
  }
}