import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAccountInput } from "./dtos/createAccount.dto";
import * as jwt from "jsonwebtoken";
import { LoginInput } from "./dtos/login.dto";
import { User } from "./entities/user.entitiy";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>,
        private readonly config: ConfigService   // users.module.ts 파일의 imports 부분에 ConfigService를 넣었기 때문에 사용할 수 있음. 
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
            const token = jwt.sign({id:user.id}, this.config.get("SECRET_KEY"));  
            return {
                ok: true,
                token
            }
        } catch(error) {
            return {
                ok: false, 
                error
            }
        }
    }
}
