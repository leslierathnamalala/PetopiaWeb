import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Auth } from '../../models/core/auth.model';
import { ResponseModel, StausCode } from '../../models/core/response.model';
import { AuthenticationService } from '../../services/auth/auth-service.service';
import { SnackbarService } from '../../services/core-service/snakbar.service';
import { UserApiService } from 'src/app/services/user/user.service';
import { UserDataService } from 'src/app/services/user/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  msg: string;
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.loadingSubject.asObservable();
  subscription: Subscription = new Subscription();
  signInAuthData: Auth = new Auth();
  loginForm: FormGroup;
  tempToken: string;
  isMfaLogin: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private userApiService: UserApiService,
    private userDataService: UserDataService,
    private snackbarService: SnackbarService,
    public dialog: MatDialog,
  ) { }

  get passwordInput() {
    return this.loginForm.get('Password');
  }

  ngOnInit() {
    this.createForm();
    this.loginForm.valueChanges.subscribe(res => {
      this.loadingSubject.next(false);
    });
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (this.loginForm.valid) {
        this.loginEvent();
      }
    }
  }

  loginEvent() {
    if (!this.loginForm.invalid) {
      const payload: any =
      {
        email: (this.loginForm.value.Email).trim(),
        password: this.loginForm.value.Password,
        twoFactorCode: null,
        twoFactorRecoveryCode: null
      }

      this.loadingSubject.next(true);
      this.subscription.add(
        this.authenticationService.signIn(payload).subscribe({
          next: (res: any) => {
            // login event
            this.authenticationService.access_token = res.accessToken;

            this.userApiService.GetUserByEmail({
              email: (this.loginForm.value.Email).trim()
            }).subscribe({
              next: (res: any) => {
                this.userDataService.loggedInUser = res;
                this.authenticationService.isLoggedIn = true;
                this.router.navigate(['user-profile']);
                this.loadingSubject.next(false);
              }
            });
          }, error: (res: ResponseModel) => {
            if (res.status === StausCode.NOT_FOUND) {
              this.snackbarService.openSnackBar('No user found');
            }
            else if (res.status === StausCode.NOT_ACTIVATED) {
              this.snackbarService.openSnackBar('User not in active state');
            }
            else {
              this.snackbarService.openSnackBar('Credentials didn\'t match or Suspended user ');
            }
            this.loadingSubject.next(false);
          }, complete: () => {
            this.loadingSubject.next(false);
          }
        }));
    } else {
      this.loginForm.controls.Email.markAsTouched();
      this.loginForm.controls.Email.markAsDirty();
      this.loginForm.controls.Password.markAsTouched();
      this.loginForm.controls.Password.markAsDirty();
    }
  }

  goToSignup(): void {
    this.router.navigate(['signup']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
