import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class AuthGuard implements CanActivate {  // canActivate는 truefmf return 하면 request를 진행시키고 false면 request를 멈추게 한다.
    canActivate(context:ExecutionContext) {
        const gqlContext = GqlExecutionContext.create(context).getContext();   // graphql의 context 가져오기
        const user = gqlContext['user'];
        if(!user){
            return false;
        } else {
            return true;
        }
    }
}