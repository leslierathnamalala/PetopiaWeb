import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-e-commerce-layout',
  templateUrl: './e-commerce-layout.component.html',
  styleUrls: ['./e-commerce-layout.component.scss']
})
export class ECommerceLayoutComponent {

  searchControl: FormControl = new FormControl('');
  constructor() { }
}
