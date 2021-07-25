import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { JwtService } from "./jwt.service";
import { UserService } from 'src/users/users.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware { 
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ) {} 

    async use(req:Request, res: Response, next: NextFunction) {
        if("x-jwt" in req.headers) {
            const token = req.headers['x-jwt'];
            const decoded = this.jwtService.verify(token);
            if (typeof decoded === 'object' && decoded.hasOwnProperty('id')) {
              try {
                const user = await this.userService.findById(decoded['id']);
                req['user'] = user;
                console.log(user);
              } catch (e) {}
            }
            console.log(token);
        }
        next();
    }
}
