import { ArgsType, Field, InputType, ObjectType, OmitType, PickType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { Restaurant } from '../entities/restaurant.entity';
 
@InputType()
export class CreateRestaurantInput  extends PickType(Restaurant,
    ['name','coverImage','address']
) {
    @Field(_=> String)
    categoryName: string;
}

@ObjectType()
export class CreateRestaurantOutput extends MutationOutput {}