import { CoreEntity } from "src/common/entities/core.entity";
import { Category } from "./category.entity";
export declare class Restaurant extends CoreEntity {
    name: string;
    coverImage: string;
    address: string;
    category: Category;
}
