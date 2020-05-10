import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../shared/api/config';
import {Item, ItemModel, ItemRegisterModel} from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(
    private http: HttpClient
  ) {
  }

  listItems(): Observable<HttpResponse<Item[]>> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'text/plain');
    return this.http.get<Item[]>(`${environment.apiUrl}/items`, {headers, observe: 'response'});

  }


  listItemsByRetailer(retailerId: number): Observable<HttpResponse<Item[]>> {
    console.log(retailerId);
    const headers = new HttpHeaders();
    const url = environment.apiUrl + '/retailers/' + retailerId.toString() + '/items';
    headers.set('Content-Type', 'text/plain');
    return this.http.get<Item[]>(url, {headers, observe: 'response'});

  }

  addRetailerItem(retailerId: number, item: ItemRegisterModel): Observable<HttpResponse<Item>> {
    console.log(retailerId);
    const name = item.name;
    const type = item.type;
    const description = item.description;
    const price = item.price;
    const tags = [];
    const imgUrl = item.imgUrl;
    tags.push(item.tags);
    // change this when req body is fixed
    const headers = new HttpHeaders();
    const url = environment.apiUrl + '/items/' + retailerId.toString();
    headers.set('Content-Type', 'text/plain');
    return this.http.post<Item>(url, {name, type, description, price, tags, imgUrl}, {headers, observe: 'response'});

  }

}
