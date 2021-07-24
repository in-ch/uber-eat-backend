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

    async createAccount({email, password,role}: CreateAccountInput): Promise<{ok:boolean, error?:string}> {
        try{
            const exists = await this.users.findOne({ email });
            if(exists) {
                return {
                    ok: false,
                    error: "이미 아이디가 존재합니다.",
                }
            } 
            await this.users.save(this.users.create({email,password,role}));
            return {
                ok: true,
            }
        } catch (e) {
            return {
                ok: false,
                error: "아이디를 생성할 수 없습니다."
            }
        }
    }
}
