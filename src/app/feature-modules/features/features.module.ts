import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import {SidebarComponent} from '../../shared/components/sidebar/sidebar.component';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';


@NgModule({
  declarations: [WrapperComponent, SidebarComponent, NavbarComponent, DashboardComponent, OrdersComponent, CustomersComponent, CuisinesComponent, RestaurantsComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  entryComponents: [OrderDetailsComponent]
})
export class FeaturesModule { }
