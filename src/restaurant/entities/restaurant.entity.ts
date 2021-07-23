import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsBoolean, IsNumber, IsString, Length } from 'class-validator';

@ObjectType()
@Entity() // TypeORM이 DB에 저장할 수 있도록 하는 것임.
export class Restaurant {
    @PrimaryGeneratedColumn()
    @Field(_ => Number)
    @IsNumber()
    id: number;
    
    @Field(_ => String)
    @Column()
    @IsString()
    name: string;

    @Field(_ => Boolean, {nullable: true})
    @Column()
    @IsBoolean()
    isGood?: boolean;  // nullable 덕분에 ?를 쓸 수 있다. 

    @Field(_=> Boolean)
    @Column()
    @IsBoolean()
    isVegan: boolean;

    @Field(_=> String)
    @Column()
    @IsString()
    address: string;

    @Field(_=> String)
    @Column()
    @IsString()
    ownerName: string;

    @Field(_ => String)
    @Column()
    @IsString()
    categoryName: string;
}