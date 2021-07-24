import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entitiy';
import { UserResolver } from './user.resolver';
import { UsersService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserResolver, UsersService],
})

export class UsersModule {

}
