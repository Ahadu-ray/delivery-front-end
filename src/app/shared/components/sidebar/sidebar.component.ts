import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/home/dashboard',     title: 'Dashboard',         icon:'nc-chart-bar-32',       class: '' },
    { path: '/home/orders',         title: 'Orders',             icon:'nc-cart-simple',    class: '' },
    // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    { path: '/home/customers',          title: 'Customers',      icon:'nc-single-02',  class: '' },
    { path: '/home/restaurants',         title: 'Restaurants',        icon:'nc-map-big',    class: '' },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
