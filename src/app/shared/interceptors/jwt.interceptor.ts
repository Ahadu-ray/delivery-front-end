import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../../feature-modules/authentication/authentication.service';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentToken = this.authenticationService.getAccessToken();
    if (currentToken) {
      request = request.clone({

        setHeaders: {
          Authorization: `Bearer ${currentToken}`
        }
      });
    } else {
      this.authenticationService.logout();
    }

    return next.handle(request);
  }
}
