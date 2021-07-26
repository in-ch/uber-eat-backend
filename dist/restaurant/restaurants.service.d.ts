import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { CreateRestaurantInput, CreateRestaurantOutput } from "./dtos/createRestaurant.dto";
import { Category } from "./entities/category.entity";
import { Restaurant } from "./entities/restaurant.entity";
export declare class RestaurantService {
    private readonly restaurants;
    private readonly categories;
    constructor(restaurants: Repository<Restaurant>, categories: Repository<Category>);
    createRestaurant(owner: User, createRestaurantInput: CreateRestaurantInput): Promise<CreateRestaurantOutput>;
}
