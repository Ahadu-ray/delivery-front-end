import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {OrderDetailsComponent} from './order-details/order-details.component';
import {OrdersService} from './orders.service';
import {NotificationService} from '../../../shared/services/notification.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {


  constructor(
    private modalService: BsModalService,
    private orderService: OrdersService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.orderService.listOrders().subscribe(result => {
      if (result) {
        if (result.status === 200) {
          console.log(result);
        } else {
          this.notificationService.error(`Couldn't list orders`, result.statusText);
        }
      }
    });
  }
detail() {
    this.modalService.show(OrderDetailsComponent);
}
}
