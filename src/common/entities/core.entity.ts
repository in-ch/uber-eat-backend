import { Field } from "@nestjs/graphql";
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class CoreEntity {
    @PrimaryGeneratedColumn()
    @Field(_ => Number)
    id: number;

    @CreateDateColumn()
    @Field(_ => Date)
    createAt:Date;

    @UpdateDateColumn()
    @Field(_ => Date)
    updateAt:Date;
}