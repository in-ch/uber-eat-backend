import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAccountInput } from "./createAccount.dto";
import { User } from "./entities/user.entitiy";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>
    ) {}

    async createAccount({email, password, role}: CreateAccountInput) {
        try{
            const exists = await this.users.findOne({ email });
            if(exists) {
                return;
            } 
            await this.users.save({email,password, role});
            return true;
        } catch (e) {
            return;

        }
    }
}
