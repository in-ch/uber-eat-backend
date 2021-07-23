import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsBoolean, IsNumber, IsOptional, IsString, Length } from 'class-validator';

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

    @Field(_=> Boolean, {defaultValue: true})  // 기본값이 들어가는 곳.
    @Column({default: true}) // 기본값을 보낼 수 있다는 뜻.
    @IsBoolean()
    @IsOptional()  // 이 필드가 없다면 무시하고 진행.
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