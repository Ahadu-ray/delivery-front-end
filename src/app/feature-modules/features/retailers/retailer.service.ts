import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderModel} from '../orders/order.model';
import {environment} from '../../../shared/api/config';
import {RetailerModel} from './retailer.model';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  constructor(
    private http: HttpClient
  ) { }
  listRetailers(): Observable<HttpResponse<RetailerModel[]>> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'text/plain');
    return this.http.get<RetailerModel[]>(`${environment.apiUrl}/retailers`, {headers, observe: 'response'});

  }
}
