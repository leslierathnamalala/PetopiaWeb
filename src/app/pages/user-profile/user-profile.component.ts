import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { SnackbarService } from '../../services/core-service/snakbar.service';
import { ConfirmService } from '../../utils/confirm.service';
import { UserGeneral } from 'src/app/models/user/user-general.model';
import { UserDataService } from 'src/app/services/user/user-data.service';
import { UserApiService } from 'src/app/services/user/user.service';
import { ResponseModel } from 'src/app/models/core/response.model';
import { ImageUploaderComponent } from 'src/app/components/image-uploader/image-uploader.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  subscription: Subscription = new Subscription();
  userInfo: UserGeneral;
  lastLogin: Date;
  userForm: FormGroup;
  mfaQRImage: any;
  imageUrl: string = 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png';
  imageSrc: string;
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.loadingSubject.asObservable();
  loadingMFASubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoadingMFA: Observable<boolean> = this.loadingMFASubject.asObservable();
  userSavingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isUserSaving: Observable<boolean> = this.userSavingSubject.asObservable();
  currrentDate: Date = new Date();
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private confirmService: ConfirmService,
    private userDataService: UserDataService,
    private userApiService: UserApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userInfo = this.userDataService.loggedInUser;
    this.createForm();
    this.userForm.patchValue({
      district: this.userInfo.district,
      city: this.userInfo.city,
      province: this.userInfo.province,
      zipCode: this.userInfo.zipCode,
    });
    this.imageUrl = this.userInfo.userImage ? this.userInfo.userImage : 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png';
  }

  createForm(): void {
    this.userForm = this.formBuilder.group({
      district: ['', [Validators.required]],
      city: ['', [Validators.required]],
      province: [''],
      zipCode: ['']
    });
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

  updateUser(): void {
    this.confirmService.confirm('Are you sure you want to update the user').subscribe((res: boolean) => {
      if (res) {
        this.userApiService.UsersUpdate(`/${this.userInfo.userId}`, {
          userId: this.userInfo.userId,
          username: this.userInfo.username,
          nic: this.userInfo.nic,
          userType: this.userInfo.userType,
          lastName: this.userInfo.lastName,
          firstName: this.userInfo.firstName,
          city: this.userForm.value.city,
          district: this.userForm.value.district,
          province: this.userForm.value.province,
          zipCode: this.userForm.value.zipCode,
          userImage: this.imageUrl,
        }).subscribe({
          next: (res: ResponseModel) => {
            this.snackbarService.openSnackBar('User updated');
            this.router.navigate(['login']);
          }
        });
      }
    });
  }
}
