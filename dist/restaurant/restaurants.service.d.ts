import { Repository } from "typeorm";
import { Restaurant } from "./entities/restaurant.entity";
export declare class RestaurantService {
    private readonly restaurants;
    constructor(restaurants: Repository<Restaurant>);
    getAll(): Promise<Restaurant[]>;
}
