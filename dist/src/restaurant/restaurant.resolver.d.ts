import { CreateRestaurantDto } from 'dtos/createRestaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
export declare class RestaurantResolver {
    myRestaurant(): boolean;
    restaurant(vegaOnly: boolean): Restaurant[];
    createRestaurant(createRestaurantInput: CreateRestaurantDto): boolean;
}
