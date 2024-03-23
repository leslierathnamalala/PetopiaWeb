import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TabService } from 'src/app/services/pet-item-advertisement/TabService-data.service';

@Component({
  selector: 'app-pet-shop',
  templateUrl: './pet-shop.component.html',
  styleUrls: ['./pet-shop.component.scss']
})
export class PetShopComponent {
  types: string[] = [
    'Toys',
    'Accessories',
    'Medicine',
    'Pet Care',
    'Skin & Coat care',
    'Supplements'
  ];
  currentType: string = 'Toys';

  constructor(
    private tabService: TabService ) { }


  getTabType(event: any) {
    const currentTabItem = event.tab.textLabel; // Get the label of the selected tab
    this.tabService.setTabType(currentTabItem);
  }
}
