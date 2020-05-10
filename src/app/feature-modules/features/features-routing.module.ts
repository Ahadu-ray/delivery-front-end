import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WrapperComponent} from './wrapper/wrapper.component';
import {OrdersComponent} from './orders/orders.component';
import {CustomersComponent} from './customers/customers.component';
import {ItemsListComponent} from './items/items-list/items-list.component';
import {RetailersComponent} from './retailers/retailers.component';
import {RetailerItemsComponent} from './retailers/retailer-items/retailer-items.component';
import {RetailerOrdersComponent} from './retailers/retailer-orders/retailer-orders.component';


const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      // {
      //   path: 'dashboard',
      //   component: DashboardComponent
      // },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'customers',
        component: CustomersComponent
      },
      {
        path: 'items',
        component: ItemsListComponent
      },
      {
        path: 'retailers',
        component: RetailersComponent
      },
      {
        path: 'retailer-items/:retailerId',
        component: RetailerItemsComponent
      }, {
        path: 'retailer-orders/:retailerId',
        component: RetailerOrdersComponent
      },
      {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
