import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../feature-modules/authentication/authentication.service';
import {NotificationService} from '../services/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private messageService: NotificationService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      }
      if (err.status === 403) {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      }
      if (err.status >= 400 && err.status < 600) {
        this.messageService.error(
          err.error.message || err.statusText,
          err.error.title,
        ); /// authentication related error
      }
      // else {
      //         this.messageService.error(
      //           'Something went wrong, try again later.',
      //           'Notice');
      //       }
      return throwError(err.error.message || err.statusText);
    }));
  }
}
