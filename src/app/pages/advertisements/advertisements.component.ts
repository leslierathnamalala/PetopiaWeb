import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PaginationType } from 'src/app/models/core/pagination-type';
import { AdvertisementApiService } from 'src/app/services/advertisement/advertisement-api.service';
import { UserDataService } from 'src/app/services/user/user-data.service';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss']
})

export class AdvertisementsComponent implements OnInit, OnDestroy {
  userId: number;
  subscription: Subscription = new Subscription();
  adsGridColumns: string[] = ['advertisementId', 'heading', 'petType', 'breed', 'price', 'reactions', 'createdOn'];
  adsGridColumnNames: string[] = ['Id', 'Title', 'Type', 'Breed', 'Price', 'Reactions', 'Created Date'];
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.loadingSubject.asObservable();
  dataSource: any[] = [];
  paginationType: typeof PaginationType = PaginationType;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    public advertisementApiService: AdvertisementApiService,
    private userDataService: UserDataService,
  ) { }

  ngOnInit() {
    this.paginator.pageSize = PaginationType.dashboardPageSize;
    this.userId = this.userDataService.loggedInUser.userId;
    this.loadAdds();
    this.paginator.page.subscribe(() => {
      this.loadAdds();
    });
  }

  loadAdds(): void {
    this.loadingSubject.next(true);
    this.subscription.add(this.advertisementApiService.GetAdsByUserId(
      this.userId,
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
