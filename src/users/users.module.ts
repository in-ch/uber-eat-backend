import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { User } from './entities/user.entitiy';
import { UserResolver } from './user.resolver';
import { UsersService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User]), ConfigService],  // 이렇게 하면 app.module에 있는 ConfigModule에 접근이 가능하다.
    providers: [UserResolver, UsersService, JwtService],
})

export class UsersModule {}
