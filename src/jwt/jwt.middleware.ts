import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { RelationQueryBuilder } from "typeorm";

// export class JwtMiddleware implements NestMiddleware {  // implementsㄹㅏㅇ   
//     use(req:Request, res: Response, next: NextFunction) {
//         console.log(req.headers);
//         next();
//     }
// }

export function jwtMiddleware(req:Request, res:Response, next:NextFunction) {
    console.log(req.headers);
    next();
}