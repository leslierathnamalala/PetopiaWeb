import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ImageUploaderComponent } from 'src/app/components/image-uploader/image-uploader.component';
import { ResponseModel } from 'src/app/models/core/response.model';
import { ClinicApiService } from 'src/app/services/ClinicService/clinic-api.service';
import { UserDataService } from 'src/app/services/user/user-data.service';
import { SnackbarService } from '../../services/core-service/snakbar.service';

@Component({
  selector: 'app-my-clinic',
  templateUrl: './my-clinic.component.html',
  styleUrls: ['./my-clinic.component.scss']
})
export class MyClinicComponent implements OnInit, OnDestroy {

  clinicFormGroup = this.formBuilder.group({
    clinicName: ['', Validators.required],
    address1: ['', Validators.required],
    address2: [''],
    address3: [''],
    type: ['', Validators.required],
    services: [[''], Validators.required],
    contact: ['', Validators.required],
    email: [''],
    website: [''],
    from: [],
    to: []
  });

  isTwentyFourSeven: FormControl = new FormControl(false);;
  subscription: Subscription = new Subscription();
  userId: number;
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.loadingSubject.asObservable();
  imageUrl: string = './assets/img/brand/img-sample.jpg';
  isClinicAvailable: boolean = false;
  selectedClinic: any;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private userDataService: UserDataService,
    private router: Router,
    private clinicApiService: ClinicApiService,
  ) { }

  ngOnInit() {
    this.userId = this.userDataService.loggedInUser.userId;
    this.getClinic();
  }

  getClinic(): void {
    this.subscription.add(this.clinicApiService.GetClinicByUserId(this.userId).subscribe({
      next: (res: ResponseModel) => {
        if (res.ok) {
          this.selectedClinic = res.body;
          this.isClinicAvailable = true;
          this.clinicFormGroup.patchValue({
            clinicName: this.selectedClinic.clinicName,
            address1: this.selectedClinic.address1,
            address2: this.selectedClinic.address2,
            address3: this.selectedClinic.address3,
            type: this.selectedClinic.type,
            services: this.selectedClinic.services?.split(',').map(item => item.trim()),
            contact: this.selectedClinic.contact,
            email: this.selectedClinic.email,
            website: this.selectedClinic.website,
            from: new Date(this.selectedClinic.from),
            to: new Date(this.selectedClinic.to)
          });

          this.imageUrl = this.selectedClinic.imageUrl;
          this.isTwentyFourSeven.setValue(this.selectedClinic.isTwentyFourSeven);
        }
      }
    }));
  }

  upload() {
    const dialogRef = this.dialog.open(ImageUploaderComponent, {
      data: null,
      height: '320px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.isRefresh === true) {
        this.imageUrl = result.url
      }
    });
  }

  saveClinic() {
    this.loadingSubject.next(true);

    const clinic: any = {
      userId: this.userDataService.loggedInUser.userId,
      clinicName: this.clinicFormGroup.value.clinicName,
      address1: this.clinicFormGroup.value.address1,
      address2: this.clinicFormGroup.value.address2,
      address3: this.clinicFormGroup.value.address3,
      type: this.clinicFormGroup.value.type,
      services: this.clinicFormGroup.value.services?.join(', '),
      contact: this.clinicFormGroup.value.contact,
      email: this.clinicFormGroup.value.email,
      website: this.clinicFormGroup.value.website,
      from: this.clinicFormGroup.value.from,
      to: this.clinicFormGroup.value.to,
      isTwentyFourSeven: this.isTwentyFourSeven.value,
      imageUrl: this.imageUrl,
    }

    this.subscription.add(this.clinicApiService.ClinicAdd(clinic).subscribe((res: any) => {
      this.snackbarService.openSnackBar('clinic successfully Added');
      this.router.navigate(['user-profile']);
      this.loadingSubject.next(false);
    }));
  }

  updateClinic() {
    this.loadingSubject.next(true);

    const clinic: any = this.selectedClinic;
    clinic.userId = this.userDataService.loggedInUser.userId;
    clinic.clinicName = this.clinicFormGroup.value.clinicName;
    clinic.address1 = this.clinicFormGroup.value.address1;
    clinic.address2 = this.clinicFormGroup.value.address2;
    clinic.address3 = this.clinicFormGroup.value.address3;
    clinic.type = this.clinicFormGroup.value.type;
    clinic.services = this.clinicFormGroup.value.services?.join(', ');
    clinic.contact = this.clinicFormGroup.value.contact;
    clinic.email = this.clinicFormGroup.value.email;
    clinic.website = this.clinicFormGroup.value.website;
    clinic.from = this.clinicFormGroup.value.from;
    clinic.to = this.clinicFormGroup.value.to;
    clinic.isTwentyFourSeven = this.isTwentyFourSeven.value;
    clinic.imageUrl = this.imageUrl;

    this.subscription.add(this.clinicApiService.ClinicUpdate(clinic.clinicId, clinic).subscribe((res: any) => {
      this.snackbarService.openSnackBar('clinic successfully Updated');
      this.router.navigate(['user-profile']);
      this.loadingSubject.next(false);
    }));
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
