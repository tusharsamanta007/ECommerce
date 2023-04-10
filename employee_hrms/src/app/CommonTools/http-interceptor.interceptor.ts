import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const Bearer = localStorage.getItem("appbearer");
    request = request.clone({
      headers: request.headers.set('Authorization','Bearer ' + Bearer)
    });
    return next.handle(request).pipe();
  }
}
