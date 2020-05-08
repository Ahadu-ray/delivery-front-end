import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../feature-modules/authentication/authentication.service';
import {NotificationService} from '../services/notification.service';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private messageService: NotificationService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.getAccessToken();
    if (currentUser) {
      // logged in so return true
      return true;
    }
    if (currentUser) {
      if (currentUser) {
        this.messageService.error('You are not authorized to access this page', 'Notice!');
        this.router.navigate(['/login']);
        return false;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login']);
      return false;
    }
  }


  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const currentUser = this.authenticationService.getAccessToken();
    // if the module or the component can be accessible by all user
    if (currentUser) {
      // logged in so return true
      return true;
    }
    if (currentUser) {
      if (currentUser) {
        this.messageService.error('You are not authorized to access this page', 'Notice!');
        this.router.navigate(['/login']);
        return false;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login']);
      return false;

    }
  }
}
