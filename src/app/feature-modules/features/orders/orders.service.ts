import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../../shared/api/config';
import {OrderModel} from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) { }
  listOrders(): Observable<HttpResponse<OrderModel[]>> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'text/plain');
    return this.http.get<OrderModel[]>(`http://142.93.167.56/api/orders`, {headers, observe: 'response'});

  }
}
