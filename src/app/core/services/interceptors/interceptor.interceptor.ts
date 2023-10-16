import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from 'src/secrets';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKeyReq = request.clone({
      setHeaders:{
        "x-api-key" : API_KEY
      }
    });
    return next.handle(apiKeyReq);
  }
}
