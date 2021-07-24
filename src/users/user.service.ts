import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAccountInput } from "./dtos/createAccount.dto";
import { User } from "./entities/user.entitiy";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>
    ) {}

    async createAccount({email, password,role}: CreateAccountInput): Promise<string | undefined> {
        try{
            const exists = await this.users.findOne({ email });
            if(exists) {
                return '이미 존재하는 이메일입니다.';
            } 
            await this.users.save({email,password,role});
        } catch (e) {
            return '계정을 생성할 수 없습니다.';
        }
    }
}
