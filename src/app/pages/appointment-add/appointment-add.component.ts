import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { UserGeneral } from 'src/app/models/user/user-general.model';
import { UserDataService } from 'src/app/services/user/user-data.service';
import { SnackbarService } from '../../services/core-service/snakbar.service';
import { ConfirmService } from '../../utils/confirm.service';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.scss']
})
export class AppointmentsAddComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  userInfo: UserGeneral;
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private confirmService: ConfirmService,
    private userDataService: UserDataService,
  ) { }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}