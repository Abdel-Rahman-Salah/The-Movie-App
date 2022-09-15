
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const userJson = localStorage.getItem('currentUser');
        if(userJson)
        {
            let currentUser = JSON.parse(userJson);
            if (currentUser && currentUser.accessToken) {
                request = request.clone({
                    setHeaders: { 
                        Authorization: `Bearer ${currentUser.accessToken}`
                    }
                });
            }
        }
       
        return next.handle(request);
    }
}
export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ];
