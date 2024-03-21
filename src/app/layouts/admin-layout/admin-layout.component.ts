import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ALL_ROUTINGS, ROUTES, RouteDetails } from '../../models/core/all-route-details';
import { AuthenticationService } from '../../services/auth/auth-service.service';
import { UserDataService } from 'src/app/services/user/user-data.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})


export class AdminLayoutComponent implements OnInit, OnDestroy {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  public menuItems: any[];
  public isCollapsed = true;
  pageName: string = '';
  userName: string = '';
  subscription: Subscription = new Subscription();
  isAdmin: boolean = false;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userDataService: UserDataService,
  ) { }

  ngOnInit() {
    this.initializePageName();
    this.isAdmin = true;
    this.getPageName(this.router.url.split('/').pop());
    this.userName = this.userDataService.loggedInUser.firstName + ' ' + this.userDataService.loggedInUser.lastName;
    this.menuItems = ROUTES.filter(route => route.permissionLevel.includes(this.userDataService.loggedInUser.userType));
    this.router.events.subscribe(() => {
      this.isCollapsed = true;
    });
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  initializePageName(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getPageName(this.router.url.split('/').pop());
      }
    })
  }

  getPageName(routeUrl: string): void {
    this.pageName = ALL_ROUTINGS.find((route: RouteDetails) => route.routingUrl === routeUrl)?.pageName;
  }

  doLogout(): void {
    this.authenticationService.doLogout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
