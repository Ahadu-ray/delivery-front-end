import { Component, OnInit } from '@angular/core';
import {OrderModel} from '../orders/order.model';
import {BsModalService} from 'ngx-bootstrap/modal';
import {OrdersService} from '../orders/orders.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {RetailerModel} from './retailer.model';
import {RetailerService} from './retailer.service';
import {RetailerDetailsComponent} from './retailer-details/retailer-details.component';
import {Router} from '@angular/router';
import {AddRetailerComponent} from './add-retailer/add-retailer.component';

@Component({
  selector: 'app-retailers',
  templateUrl: './retailers.component.html',
  styleUrls: ['./retailers.component.scss']
})
export class RetailersComponent implements OnInit {
  retailers: RetailerModel[];

  constructor(
    private modalService: BsModalService,
    private retailerService: RetailerService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listRetailers();
  }
  listRetailers() {
    // change list pagination when count is added to resp body
    this.retailerService.listRetailers().subscribe(result => {
      if (result) {
        // change response when resp body is fixed
        if (result.status === 200) {
          // console.log(result);
          this.retailers = result.body;
        } else {
          this.notificationService.error(`Couldn't list retailers`, result.statusText);
        }
      }
    });
  }

  detail(each: RetailerModel) {
    const initialState = {
      retailer: each
    };
    this.modalService.show(RetailerDetailsComponent, {initialState});
  }

  retailerItems(id: number) {
   this.router.navigate(['/home/retailer-items/' + id]);
  }

  retailerOrders(_id: number) {
    this.router.navigate(['/home/retailer-orders/' + _id]);
  }

  add() {
    this.modalService.show(AddRetailerComponent);
    this.modalService.onHide.subscribe(val => {
      this.listRetailers();
    })
  }
}
