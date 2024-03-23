import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AppointmentApiService } from 'src/app/services/appointment-service/appointment-api.service';
import { ResponseModel, StausCode } from '../../models/core/response.model';
import { SnackbarService } from 'src/app/services/core-service/snakbar.service';
import { UserDataService } from 'src/app/services/user/user-data.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit, OnDestroy {
  calendarOptions: CalendarOptions;
  currentMonth: number;
  currentYear: number;
  subscription: Subscription = new Subscription();
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.loadingSubject.asObservable();
  driverProfile: any;

  constructor(
    private appointmentApiService: AppointmentApiService,
    public dialog: MatDialog,
    private snackbarService: SnackbarService,
    private userDataService: UserDataService,
  ) {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin],
      headerToolbar: {
        left: 'prev,today,next',
        center: 'title'
      },
      buttonText: {
        today: 'Today'
      },
      events: this.handleEvents.bind(this)
    };
  }

  ngOnInit() {

  }

  handleEvents(info: any, successCallback: any, failureCallback: any) {
    const startDate = info.start;
    const endDate = info.end;
    const midpointTimestamp = (startDate.getTime() + endDate.getTime()) / 2;
    const midpointDate = new Date(midpointTimestamp);

    this.currentYear = midpointDate.getFullYear();
    this.currentMonth = midpointDate.getMonth() + 1;

    this.subscription.add(this.appointmentApiService.GetAllAppointments(this.userDataService.loggedInUser.userId).subscribe({
      next: (res: ResponseModel) => {
        if (res) {
          const data = res.body;
          console.log(data)
          const result = data.map(item => {
            return {
              title: `Name: ${item?.name} \n Contact: ${item?.contact}`,
              date: item.date?.substring(0, 10)
            };
          });
          successCallback(result);
        }
      },
      error: (res: ResponseModel) => {
        if (res.status === StausCode.NOT_FOUND) {
          this.snackbarService.openSnackBar('No any appointments');
        }
        successCallback([]);
      }
    }))
  }


  refreshEvents() {
    this.calendarOptions.events = this.handleEvents.bind(this);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

