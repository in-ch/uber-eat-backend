import { ArgsType, Field, InputType, OmitType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';
import { Restaurant } from '../entities/restaurant.entity';
 
@InputType()
export class CreateRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  InputType // inputType이라고 명시해주는 것이다
) {}