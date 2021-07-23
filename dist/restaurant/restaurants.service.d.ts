import { Repository } from "typeorm";
import { CreateRestaurantDto } from "./dtos/createRestaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";
export declare class RestaurantService {
    private readonly restaurants;
    constructor(restaurants: Repository<Restaurant>);
    getAll(): Promise<Restaurant[]>;
    createResturant(createResturantDto: CreateRestaurantDto): Promise<Restaurant>;
}
