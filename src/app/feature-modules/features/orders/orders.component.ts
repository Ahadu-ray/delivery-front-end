import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {OrderDetailsComponent} from './order-details/order-details.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {


  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }
detail() {
    this.modalService.show(OrderDetailsComponent);
}
}
