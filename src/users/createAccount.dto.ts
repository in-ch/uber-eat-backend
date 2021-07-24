import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql"
import { User } from "./entities/user.entitiy"

@InputType()
export class CreateAccountInput extends PickType(User, [
    "email",
    "password",
    "role"]
) {}

@ObjectType()
export class createAccountOutput {
    @Field(_ => String, {nullable: true})
    error?: string;

    @Field(_ => Boolean)
    ok: boolean;
}