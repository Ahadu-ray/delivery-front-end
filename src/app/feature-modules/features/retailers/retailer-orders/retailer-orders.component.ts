import { Component, OnInit } from '@angular/core';
import {Item} from '../../items/item.model';
import {ItemService} from '../../items/item.service';
import {NotificationService} from '../../../../shared/services/notification.service';
import {ActivatedRoute} from '@angular/router';
import {BsModalService} from 'ngx-bootstrap/modal';
import {OrderModel} from '../../orders/order.model';
import {OrdersService} from '../../orders/orders.service';

@Component({
  selector: 'app-retailer-orders',
  templateUrl: './retailer-orders.component.html',
  styleUrls: ['./retailer-orders.component.scss']
})
export class RetailerOrdersComponent implements OnInit {
  orders: OrderModel[];
  retailerId: string;

  constructor(
    private orderService: OrdersService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService
  ) {
  }

  ngOnInit(): void {
    this.retailerId = this.activatedRoute.snapshot.paramMap.get('retailerId');
    this.listOrders(this.retailerId);
  }

  listOrders(retailerId) {
    this.orderService.listOrdersByRetailers(retailerId).subscribe(result => {
      if (result) {
        // change response when resp body is fixed
        if (result.status === 200) {
          // console.log(result);
          this.orders = result.body;
        } else {
          this.notificationService.error(`Couldn't list retailer orders`, result.statusText);
        }
      }
    });
  }


}
