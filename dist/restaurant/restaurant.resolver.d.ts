import { CreateRestaurantDto } from './dtos/createRestaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';
export declare class RestaurantResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    myRestaurant(): boolean;
    restaurant(): Promise<Restaurant[]>;
    createRestaurant(createRestaurantInput: CreateRestaurantDto): boolean;
}
