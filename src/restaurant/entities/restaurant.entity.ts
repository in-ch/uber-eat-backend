import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Restaurant {
    @Field(_ => String)
    name: string;
    @Field(_ => Boolean, {nullable: true})
    isGood?: boolean;  // nullable 덕분에 ?를 쓸 수 있다. 
    @Field(_=> Boolean)
    isVegan: boolean;
    @Field(_=> String)
    address: string;
    @Field(_=> String)
    ownerName: string;
}