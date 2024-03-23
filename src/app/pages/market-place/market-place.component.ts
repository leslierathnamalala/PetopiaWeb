import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PaginationType } from 'src/app/models/core/pagination-type';
import { AdvertisementApiService } from 'src/app/services/advertisement/advertisement-api.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.scss']
})
export class MarketPlaceComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.loadingSubject.asObservable();
  paginationType: typeof PaginationType = PaginationType;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: any[] = [];

  constructor(
    public dialog: MatDialog,
    public advertisementApiService: AdvertisementApiService
  ) { }


  ngOnInit() {
    this.paginator.pageSize = PaginationType.landingPageSize;
    this.loadAdds();
    this.paginator.page.subscribe(() => {
      this.loadAdds();
    });
  }

  loadAdds(): void {
    this.loadingSubject.next(true);
    this.subscription.add(this.advertisementApiService.GetAllAds(
      this.paginator.pageIndex,
      this.paginator.pageSize).subscribe({
        next: (res: any) => {
          if (res.ok) {
            this.dataSource = res.body.payload;
            this.paginator.length = res.body.totalItems;
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
