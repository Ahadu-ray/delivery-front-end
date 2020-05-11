import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../feature-modules/authentication/authentication.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/home/orders',         title: 'Orders',             icon:'nc-cart-simple',    class: '' },
    { path: '/home/customers',          title: 'Customers',      icon:'nc-single-02',  class: '' },
  { path: '/home/retailers',         title: 'Retailers',        icon:'nc-map-big',    class: '' },
  { path: '/home/items',         title: 'Items',        icon:'nc-map-big',    class: '' },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    constructor(
      private authService: AuthenticationService
    ) {

    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

  logout() {
    this.authService.logout();
  }
}
