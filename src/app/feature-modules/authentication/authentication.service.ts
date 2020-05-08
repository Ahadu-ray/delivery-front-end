import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../shared/api/config';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class AuthenticationService {
  constructor(private http: HttpClient,
              private router: Router,
  ) {
  }
  login(username: string, password: string): Observable<any> {
    const body = {username, password};
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'text/plain');

    return this.http.post(`${environment.apiUrl}/admin/login`, body, {headers, responseType: 'text', observe: 'response'});
  }
  getAccessToken() {
    return localStorage.getItem('access_token');
  }
  saveAccesToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['/login']);
    }
  }

}

