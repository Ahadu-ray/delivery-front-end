import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {OrderDetailsComponent} from './order-details/order-details.component';
import {OrdersService} from './orders.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {OrderModel} from './order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
orders: OrderModel[];
  constructor(
    private modalService: BsModalService,
    private orderService: OrdersService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
   this.listOrders();
  }
  listOrders() {
    // change list pagination when count is added to resp body
    this.orderService.listOrders().subscribe(result => {
      if (result) {
        // change response when resp body is fixed
        if (result.status === 200) {
          // console.log(result);
          this.orders = result.body;
        } else {
          this.notificationService.error(`Couldn't list orders`, result.statusText);
        }
      }
    });
  }
// detail() {
//     this.modalService.show(OrderDetailsComponent);
// }
}
