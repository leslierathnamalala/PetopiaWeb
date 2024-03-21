import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ImageUploaderComponent } from 'src/app/components/image-uploader/image-uploader.component';
import { UserGeneral } from 'src/app/models/user/user-general.model';
import { AdvertisementApiService } from 'src/app/services/advertisement/advertisement-api.service';
import { UserDataService } from 'src/app/services/user/user-data.service';
import { SnackbarService } from '../../services/core-service/snakbar.service';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss']
})
export class AdvertisingComponent implements OnInit, OnDestroy {

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
    petType: ['', Validators.required],
    breed: ['', Validators.required],
    contact: ['', Validators.required],
    price: ['', Validators.required],
  });
  isPro: FormControl = new FormControl(false);


  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private router: Router,
    private userDataService: UserDataService,
    private advertisementApiService: AdvertisementApiService,
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
      userId: this.userDataService.loggedInUser.userId,
      heading: this.advertisingFormGroup.value.heading,
      description: this.advertisingFormGroup.value.description,
      petType: this.advertisingFormGroup.value.petType,
      breed: this.advertisingFormGroup.value.breed,
      contact: this.advertisingFormGroup.value.contact,
      price: this.advertisingFormGroup.value.price,
      isPro: this.isPro.value,
      imageUrl1: this.imageUrl1,
      imageUrl2: this.imageUrl2,
      imageUrl3: this.imageUrl3,
    }

    this.subscription.add(this.advertisementApiService.AdvertisementAdd(advertisement).subscribe((res: any) => {
      this.snackbarService.openSnackBar('Advertisement successfully added');
      this.router.navigate(['user-profile']);
      this.loadingSubject.next(false);
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
