import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateAccountInput, createAccountOutput } from './createAccount.dto';
import { User } from './entities/user.entitiy';
import { UsersService } from './user.service';

@Resolver(_ => User)
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(_=> Boolean)
  hi() {
    return true;
  }

  @Mutation(_ => createAccountOutput) 
  createAccount(@Args("input") createAccountInput:CreateAccountInput) {
    // return 
  }
}