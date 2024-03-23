import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ImageUploaderComponent } from 'src/app/components/image-uploader/image-uploader.component';
import { UserGeneral } from 'src/app/models/user/user-general.model';
import { AdvertisementApiService } from 'src/app/services/advertisement/advertisement-api.service';
import { UserDataService } from 'src/app/services/user/user-data.service';
import { SnackbarService } from '../../services/core-service/snakbar.service';
import { PetItemAdvertisementApiService } from 'src/app/services/pet-item-advertisement/pet-item-advertisement-api.service';

@Component({
  selector: 'app-pet-item-advertising',
  templateUrl: './pet-item-advertising.component.html',
  styleUrls: ['./pet-item-advertising.component.scss']
})
export class PetItemAdvertisingComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  userInfo: UserGeneral;
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.loadingSubject.asObservable();
  imageUrl1: string = './assets/img/brand/img-sample.jpg';
  imageUrl2: string = './assets/img/brand/img-sample.jpg';
  imageUrl3: string = './assets/img/brand/img-sample.jpg';
  advertisingFormGroup = this.formBuilder.group({
    heading: ['', Validators.required],
    description: ['', Validators.required],
    itemType: ['', Validators.required],
    price: ['', Validators.required],
  });
  types: string[] = [
    'Toys',
    'Accessories',
    'Medicine',
    'Pet Care',
    'Skin & Coat care',
    'Supplements'
];

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private router: Router,
    private userDataService: UserDataService,
    private advertisementApiService: PetItemAdvertisementApiService,
  ) { }

  ngOnInit() {
  
  }

  upload1(): void {
    const dialogRef = this.dialog.open(ImageUploaderComponent, {
      data: null,
      height: '320px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.isRefresh === true) {
        this.imageUrl1 = result.url
      }
    });
  }

  upload2(): void {
    const dialogRef = this.dialog.open(ImageUploaderComponent, {
      data: null,
      height: '320px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.isRefresh === true) {
        this.imageUrl2 = result.url
      }
    });
  }


  upload3(): void {
    const dialogRef = this.dialog.open(ImageUploaderComponent, {
      data: null,
      height: '320px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.isRefresh === true) {
        this.imageUrl3 = result.url
      }
    });
  }

  postAdvertisement(): void {
    this.loadingSubject.next(true);
    const advertisement: any = {
      heading: this.advertisingFormGroup.value.heading,
      description: this.advertisingFormGroup.value.description,
      itemType: this.advertisingFormGroup.value.itemType,
      price: this.advertisingFormGroup.value.price,
      imageUrl1: this.imageUrl1,
      imageUrl2: this.imageUrl2,
      imageUrl3: this.imageUrl3
    }

    this.subscription.add(this.advertisementApiService.ItemsAdd(advertisement).subscribe((res: any) => {
      this.snackbarService.openSnackBar('Advertisement successfully added');
      this.router.navigate(['user-profile']);
      this.loadingSubject.next(false);
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
