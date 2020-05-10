import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../../shared/api/config';
import {OrderModel} from './order.model';
import {Item} from '../items/item.model';

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
    return this.http.get<OrderModel[]>(`${environment.apiUrl}/orders`, {headers, observe: 'response'});

  }
  listOrdersByRetailers(retailerId: number): Observable<HttpResponse<OrderModel[]>> {
    console.log(retailerId);
    const headers = new HttpHeaders();
    const url = environment.apiUrl + '/orders/retailer/' + retailerId.toString();
    headers.set('Content-Type', 'text/plain');
    return this.http.get<OrderModel[]>(url, {headers, observe: 'response'});

  }
}
