import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderModel} from '../orders/order.model';
import {environment} from '../../../shared/api/config';
import {RetailerModel, RetailerRegisterModel} from './retailer.model';
import {iterator} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  constructor(
    private http: HttpClient
  ) {
  }

  listRetailers(): Observable<HttpResponse<RetailerModel[]>> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'text/plain');
    return this.http.get<RetailerModel[]>(`${environment.apiUrl}/retailers`, {headers, observe: 'response'});
  }

  addRetailer(retailer: RetailerRegisterModel): Observable<HttpResponse<RetailerModel>> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'text/plain');
    const coordinates = [];
    coordinates.push(retailer.longitude);
    coordinates.push(retailer.latitude);
    const tagsValue = [];
    tagsValue.push(retailer.tags);

    const openingHrVal = [];
    openingHrVal.push(retailer.openingHr);
    openingHrVal.push(retailer.openingMin);

    const closingHrVal = [];
    closingHrVal.push(retailer.closingHr);
    closingHrVal.push(retailer.closingMin);

    const name = retailer.name;
    // const location = {
    //   coordinates,
    //   type: retailer.locationType
    // };
    const location = coordinates;
    const description = retailer.description;
    const phoneNumber = retailer.phoneNumber;
    const type = retailer.type;
    const tags = tagsValue;
    const openingHours = openingHrVal;
    const closingHours = closingHrVal;
    const imgUrl = '';
    return this.http.post<RetailerModel>(`${environment.apiUrl}/retailers`, {
      name,
      type,
      description,
      phoneNumber,
      tags,
      location,
      openingHours,
      closingHours,
      imgUrl
    }, {headers, observe: 'response'});

  }
}
