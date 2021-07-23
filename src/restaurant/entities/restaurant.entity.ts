import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity() // TypeORM이 DB에 저장할 수 있도록 하는 것임.
export class Restaurant {
    @PrimaryGeneratedColumn()
    @Field(_ => Number)
    id: number;
    
    @Field(_ => String)
    @Column()
    name: string;

    @Field(_ => Boolean, {nullable: true})
    @Column()
    isGood?: boolean;  // nullable 덕분에 ?를 쓸 수 있다. 

    @Field(_=> Boolean)
    @Column()
    isVegan: boolean;

    @Field(_=> String)
    @Column()
    address: string;

    @Field(_=> String)
    @Column()
    ownerName: string;

    @Field(type => String)
    @Column()
    categoryName: string;
}