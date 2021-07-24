import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAccountInput } from "./dtos/createAccount.dto";
import { LoginInput } from "./dtos/login.dto";
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

    async login({email,password}:LoginInput): Promise<{ ok:boolean, error?:string, token?:string}> {
        try{
            const user = await this.users.findOne({email});
            if(!user) {
                return {
                    ok:false,
                    error: "유저를 찾을 수 없습니다."
                }
            } 
            const passwordCorrect = await user.checkPassword(password);
            if(!passwordCorrect){
                return {
                    ok: false, 
                    error: "비밀번호가 틀립니다.",
                }
            }
            return {
                ok: true,
                token:"lalala",
            }
        } catch(error) {
            return {
                ok: false, 
                error
            }
        }
    }
}
