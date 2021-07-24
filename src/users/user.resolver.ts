import { Logger } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateAccountInput, CreateAccountOutput } from './dtos/createAccount.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
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

  @Mutation(_ => LoginOutput) 
  async login(@Args('input') loginInput:LoginInput):Promise<LoginOutput> {
    try{
      const {ok, error, token} = await this.usersService.login(loginInput);
      return {
        ok,
        error,
        token
      }
    } catch(error) {
      return {
        ok: false,
        error,
      }
    }
  } 
}