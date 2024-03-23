import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ClinicApiService } from 'src/app/services/ClinicService/clinic-api.service';
import { AppointmentApiService } from 'src/app/services/appointment-service/appointment-api.service';
import { SnackbarService } from '../../services/core-service/snakbar.service';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.scss']
})
export class AppointmentsAddComponent implements OnInit, OnDestroy {

  formGroup = this.formBuilder.group({
    clinicId: ['', Validators.required],
    contact: ['', Validators.required],
    name: ['', Validators.required],
    date: ['', Validators.required],
    from: [null, Validators.required],
    to: [null, Validators.required]
  });
  today = new Date();
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.loadingSubject.asObservable();
  subscription: Subscription = new Subscription();
  dataSource: any[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    public dialog: MatDialog,
    public clinicApiService: ClinicApiService,
    public appointmentApiService: AppointmentApiService,
  ) { }

  ngOnInit() {
    this.loadClinics();
  }

  loadClinics(): void {
    this.subscription.add(this.clinicApiService.GetAllClinicList().subscribe({
      next: (res: any) => {
        if (res.ok) {
          this.dataSource = res.body;
        }
      }, error: (error: any) => {
        this.dataSource = [];
      }
    }));
  }

  SignupEvent(): void {
    if (this.formGroup.valid) {
      this.loadingSubject.next(true);
      const body: any = {
        clinicId: this.formGroup.value.clinicId,
        contact: this.formGroup.value.contact,
        name: this.formGroup.value.name,
        date: this.formGroup.value.date,
        from: this.formGroup.value.from,
        to: this.formGroup.value.to
      }

      this.subscription.add(this.appointmentApiService.AppointmentAdd(body).subscribe({
        next: () => {
          this.loadingSubject.next(false);
          this.snackbarService.openSnackBar('Appointment Created');
          this.close();
        }, error: () => {
          this.loadingSubject.next(false);
          this.snackbarService.openSnackBar('Something went wrong');
        }, complete: () => {
          this.loadingSubject.next(false);
        }
      }));
    }
  }

  close(): void {
    this.router.navigate(['home']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
