import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = true;
  isLoading: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.add("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("foodbox-v2");
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   this.load();
  }

  load(): void {
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 2000);
  }

  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("foodbox-v2");
  }
}
