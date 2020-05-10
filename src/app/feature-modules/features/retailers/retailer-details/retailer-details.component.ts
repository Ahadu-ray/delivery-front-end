import { Component, OnInit } from '@angular/core';
import {RetailerModel} from '../retailer.model';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {environment} from '../../../../shared/api/config';

@Component({
  selector: 'app-retailer-details',
  templateUrl: './retailer-details.component.html',
  styleUrls: ['./retailer-details.component.scss']
})
export class RetailerDetailsComponent implements OnInit {
retailer: RetailerModel;
  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    // use this on prod
    // this.retailer.imgUrl = window.location.origin + '/' + this.retailer.imgUrl;
this.retailer.imgUrl = `${environment.apiUrl}/${this.retailer.imgUrl} `;
  }

}
