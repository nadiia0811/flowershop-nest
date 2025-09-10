import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    console.log("Before request...interceptor");

    return next.handle()
               .pipe(tap(() => {
                 const elapsed = Date.now() - now;
                 console.log(`After request...interceptor: ${elapsed} ms`);
               }))
  }
}