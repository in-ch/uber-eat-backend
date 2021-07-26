import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne } from "typeorm";
import { IsBoolean, IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { CoreEntity } from "src/common/entities/core.entity";
import { Category } from "./category.entity";
import { User } from "src/users/entities/user.entity";

@InputType('RestaurantInputType', { isAbstract: true })
@ObjectType()
@Entity() // TypeORM이 DB에 저장할 수 있도록 하는 것임.

export class Restaurant extends CoreEntity{
    @Field(_ => String)
    @Column()
    @IsString()
    name: string;

    @Field(_ => String)
    @Column()
    @IsString()
    coverImage: string;

    @Field(_=> String, { defaultValue: '강남' })
    @Column()
    @IsString()
    address: string;

    @Field(_ => Category, {nullable: true})
    @ManyToOne(_=> Category, categroy => categroy.restaurants,{nullable:true, onDelete:"SET NULL"})
    category: Category

    @Field(_ => User)
    @ManyToOne(_=> User, user => user.restaurants)
    owner: User
}