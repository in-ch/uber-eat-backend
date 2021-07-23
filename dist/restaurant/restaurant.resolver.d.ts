import { Restaurant } from './entities/restaurant.entity';
export declare class RestaurantResolver {
    myRestaurant(): boolean;
    restaurant(vegaOnly: boolean): Restaurant[];
}
