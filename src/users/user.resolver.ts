import { Resolver, Query } from '@nestjs/graphql';
import { User } from './entities/user.entitiy';
import { UsersService } from './user.service';

@Resolver(_ => User)
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(_=> Boolean)
  hi() {
    return true;
  }
}