import { User } from 'src/users/entities/user.entity';
import { CreateRestaurantInput, CreateRestaurantOutput } from './dtos/createRestaurant.dto';
import { RestaurantService } from './restaurants.service';
export declare class RestaurantResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    createRestaurant(authUser: User, createRestaurantInput: CreateRestaurantInput): Promise<CreateRestaurantOutput>;
}
