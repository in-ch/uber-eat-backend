import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Column, Entity, OneToMany } from "typeorm";
import { IsBoolean, IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { CoreEntity } from "src/common/entities/core.entity";
import { Restaurant } from "./restaurant.entity";

@InputType('CategoryInputType', { isAbstract: true })
@ObjectType()
@Entity() // TypeORM이 DB에 저장할 수 있도록 하는 것임.
export class Category extends CoreEntity{
    
    @Field(_ => String)
    @Column()
    @IsString()
    name: string;

    @Field(_ => String)
    @Column()
    @IsString()
    coverImage: string;   // 카테고리 이미지 부분.

    @Field(_ => [Restaurant], { nullable: true })
    @OneToMany(_=> Restaurant, restaurant => restaurant.category)
    restaurants: Restaurant[]

}