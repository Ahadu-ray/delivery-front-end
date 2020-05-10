import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Status} from 'tslint/lib/runner';
import {Observable} from 'rxjs';
import {environment} from '../api/config';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {


  constructor(
    private httpClient: HttpClient,
  ) { }
  uploadImage(file: File, itemId: number): Observable<HttpEvent<Status>> {
    const formData = new FormData();
    formData.append('file', file);
    const url = `${environment.apiUrl}/items/upload/${itemId}`;
    const httpRequest = new HttpRequest('POST',  url, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.httpClient.request(httpRequest);
  }
}
