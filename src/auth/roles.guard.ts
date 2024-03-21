import { Injectable, CanActivate, ExecutionContext, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UseGuards } from '@nestjs/common'


@Injectable()
export class RolesGuard implements CanActivate {
    canActivate(
        context: ExecutionContext
        ): boolean | Promise<boolean> | Observable<boolean> {
            return true;       
    }
}

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {}