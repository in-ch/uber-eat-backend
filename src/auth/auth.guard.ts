import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { User } from "src/users/entities/user.entity";
import { AllowedRoles } from "./role.decorator";

@Injectable()
export class AuthGuard implements CanActivate {  // canActivate는 truefmf return 하면 request를 진행시키고 false면 request를 멈추게 한다.
    constructor(private readonly reflector: Reflector) {} // get을 쓰기 위해 import 
    canActivate(context:ExecutionContext) {
        const roles = this.reflector.get<AllowedRoles>(
        'roles',
            context.getHandler(),
        );
        if (!roles) {
            return true;
        }
        console.log(roles);

        const gqlContext = GqlExecutionContext.create(context).getContext();   // graphql의 context 가져오기
        const user: User = gqlContext['user'];
        if (roles.includes('Any')) {
            return true;
          }
          return roles.includes(user.role);
    }
}