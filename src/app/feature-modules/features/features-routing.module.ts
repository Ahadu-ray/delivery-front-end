import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WrapperComponent} from './wrapper/wrapper.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersComponent} from './orders/orders.component';
import {CustomersComponent} from './customers/customers.component';
import {CuisinesComponent} from './cuisines/cuisines.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';


const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'customers',
        component: CustomersComponent
      },
      {
        path: 'cuisines',
        component: CuisinesComponent
      },
      {
        path: 'restaurants',
        component: RestaurantsComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
