import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  isSubAvailable: boolean;
  subContent?: any;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '', isSubAvailable: false },
  { path: '/user-profile', title: 'User Profile', icon: 'ni-single-02 text-yellow', class: '', isSubAvailable: false },
  {
    path: '/referral', title: 'Referrals', icon: 'ni-bullet-list-67 text-red', class: '', isSubAvailable: true,
    subContent: [
      { path: '/my-referrals', title: 'My Referrals', class: '' },
    ]
  },
  { path: '/voucher', title: 'Vouchers', icon: 'ni-planet text-blue', class: '', isSubAvailable: false },
  { path: '/driver', title: 'Driver', icon: 'ni-circle-08 text-pink', class: '', isSubAvailable: false },
  { path: '/delivery-schedule', title: 'Delivery Schedule', icon: 'ni-delivery-fast text-blue', class: '', isSubAvailable: false },
  { path: '/user', title: 'User', icon: 'ni-tv-2 text-blue', class: '', isSubAvailable: false }
  // { path: '/icons', title: 'Icons', icon: 'ni-planet text-blue', class: '' },
  // { path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: '' },
  // { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
