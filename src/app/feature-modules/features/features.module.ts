import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeaturesRoutingModule} from './features-routing.module';
import {WrapperComponent} from './wrapper/wrapper.component';
import {SidebarComponent} from '../../shared/components/sidebar/sidebar.component';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersComponent} from './orders/orders.component';
import {CustomersComponent} from './customers/customers.component';
import {OrderDetailsComponent} from './orders/order-details/order-details.component';
import {SharedModule} from '../../shared/shared.module';
import {ItemsListComponent} from './items/items-list/items-list.component';
import {RetailersComponent} from './retailers/retailers.component';
import {AddItemsComponent} from './retailers/add-items/add-items.component';
import {RetailerDetailsComponent} from './retailers/retailer-details/retailer-details.component';
import {RetailerItemsComponent} from './retailers/retailer-items/retailer-items.component';
import {RetailerOrdersComponent} from './retailers/retailer-orders/retailer-orders.component';
import {UploadItemImageComponent} from './items/upload-item-image/upload-item-image.component';
import { AddRetailerComponent } from './retailers/add-retailer/add-retailer.component';
import { UploadRetailerImageComponent } from './retailers/upload-retailer-image/upload-retailer-image.component';


@NgModule({
  declarations: [WrapperComponent, SidebarComponent, NavbarComponent, DashboardComponent, OrdersComponent, CustomersComponent, OrderDetailsComponent, ItemsListComponent, RetailersComponent, AddItemsComponent, RetailerDetailsComponent, RetailerItemsComponent, RetailerOrdersComponent, UploadItemImageComponent, AddRetailerComponent, UploadRetailerImageComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ],
  entryComponents: [OrderDetailsComponent, RetailerDetailsComponent, AddItemsComponent, UploadItemImageComponent, UploadRetailerImageComponent]
})
export class FeaturesModule {
}
