import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne } from "typeorm";
import { IsBoolean, IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { CoreEntity } from "src/common/entities/core.entity";
import { Category } from "./category.entity";

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

    @Field(_=> String)
    @Column()
    @IsString()
    address: string;

    @Field(_ => Category)
    @ManyToOne(_=> Category, categroy => categroy.id)
    category: Category

}