import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PaginationType } from 'src/app/models/core/pagination-type';
import { TabService } from 'src/app/services/pet-item-advertisement/TabService-data.service';
import { PetItemAdvertisementApiService } from 'src/app/services/pet-item-advertisement/pet-item-advertisement-api.service';

@Component({
  selector: 'app-pet-shop-items',
  templateUrl: './pet-shop-items.component.html',
  styleUrls: ['./pet-shop-items.component.scss']
})
export class PetShopItemsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.loadingSubject.asObservable();
  paginationType: typeof PaginationType = PaginationType;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: any[] = [];
  petItemType: string = 'Toys';

  constructor(
    public dialog: MatDialog,
    public advertisementApiService: PetItemAdvertisementApiService,
    private tabService: TabService
  ) { }


  ngOnInit() {
    this.paginator.pageSize = PaginationType.landingPageSize;
    this.loadAdds();
    this.paginator.page.subscribe(() => {
      this.loadAdds();
    });

    this.tabService.getTabType().subscribe(tabType => {
      this.petItemType = tabType;
      this.loadAdds();
    });
  }

  loadAdds(): void {
    this.loadingSubject.next(true);
    this.subscription.add(this.advertisementApiService.GetAllItems(
      this.paginator.pageIndex,
      this.paginator.pageSize,
      {
        itemType: this.petItemType
      }
    ).subscribe({
      next: (res: any) => {
        if (res) {
          this.dataSource = res.payload;
          this.paginator.length = res.totalItems;
          this.loadingSubject.next(false);
        }
      }, error: (error: any) => {
        this.dataSource = [];
        this.loadingSubject.next(false);
      }, complete: () => {
        this.loadingSubject.next(false);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
