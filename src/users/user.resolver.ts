import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateAccountInput, CreateAccountOutput } from './dtos/createAccount.dto';
import { User } from './entities/user.entitiy';
import { UsersService } from './user.service';

@Resolver(_ => User)
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(_=> Boolean)
  hi() {
    return true;
  }

  @Mutation(_ => CreateAccountOutput) 
  async createAccount(@Args("input") createAccountInput:CreateAccountInput):Promise<CreateAccountOutput> {
    try {
      const {ok, error} = await this.usersService.createAccount(createAccountInput);
      if(error){
        return {
          ok,
          error,
        };
      } else {
        return {
          ok,
        }
      }
    } catch(e) {
      return {
        ok: false, 
        error: e,
      }
    }
  }
}