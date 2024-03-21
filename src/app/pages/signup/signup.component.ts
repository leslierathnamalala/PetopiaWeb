import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { UserApiService } from 'src/app/services/user/user.service';
import { AuthenticationService } from '../../services/auth/auth-service.service';
import { SnackbarService } from '../../services/core-service/snakbar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  firstFormGroup = this.formBuilder.group({
    userEmail: ['', Validators.required],
    NewPassword: ['', Validators.required],
    ReNewPassword: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    username: [''],
    nic: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    district: ['', Validators.required],
    province: ['', Validators.required],
    city: ['', Validators.required],
    zipCode: ['', Validators.required],
    userType: [1, Validators.required],
  });

  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.loadingSubject.asObservable();
  subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private userApiService: UserApiService,
    private snackbarService: SnackbarService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

  }

  register(stepper: MatStepper) {
    if (this.firstFormGroup.valid) {
      this.loadingSubject.next(true);
      const body: any = {
        email: this.firstFormGroup.value.userEmail,
        password: this.firstFormGroup.value.NewPassword
      }

      this.subscription.add(this.authenticationService.signUp(body).subscribe({
        next: () => {
          this.secondFormGroup.controls.username.setValue(this.firstFormGroup.value.userEmail);
          this.loadingSubject.next(false);
          this.snackbarService.openSnackBar('User Registered');
          stepper.next();
        }, error: () => {
          this.loadingSubject.next(false);
          this.snackbarService.openSnackBar('Something went wrong');
        }, complete: () => {
          this.loadingSubject.next(false);
        }
      }));
    } else {
      this.firstFormGroup.controls.userEmail.markAsTouched();
      this.firstFormGroup.controls.userEmail.markAsDirty();
    }
  }

  SignupEvent(): void {
    if (this.secondFormGroup.valid) {
      this.loadingSubject.next(true);
      const body: any = {
        username: this.secondFormGroup.value.username,
        nic: this.secondFormGroup.value.nic,
        firstName: this.secondFormGroup.value.firstName,
        lastName: this.secondFormGroup.value.lastName,
        district: this.secondFormGroup.value.district,
        province: this.secondFormGroup.value.province,
        city: this.secondFormGroup.value.city,
        zipCode: this.secondFormGroup.value.zipCode,
        userType: this.secondFormGroup.value.userType
      }

      this.subscription.add(this.userApiService.UsersAdd(body).subscribe({
        next: () => {
          this.loadingSubject.next(false);
          this.snackbarService.openSnackBar('user Created');
          this.close();
        }, error: () => {
          this.loadingSubject.next(false);
          this.snackbarService.openSnackBar('Something went wrong');
        }, complete: () => {
          this.loadingSubject.next(false);
        }
      }));
    } else {
      this.firstFormGroup.controls.userEmail.markAsTouched();
      this.firstFormGroup.controls.userEmail.markAsDirty();
    }
  }

  close(): void {
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
