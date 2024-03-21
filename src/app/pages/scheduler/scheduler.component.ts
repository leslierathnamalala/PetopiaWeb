import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { SnackbarService } from '../../services/core-service/snakbar.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit, OnDestroy {
  calendarOptions: CalendarOptions;
  currentMonth: number;
  currentYear: number;
  subscription: Subscription = new Subscription();
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.loadingSubject.asObservable();
  driverProfile: any;

  constructor(
    private snackbarService: SnackbarService,
    public dialog: MatDialog,
  ) {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin],
      headerToolbar: {
        left: 'prev,today,next',
        center: 'title',
        right: 'updateAvailability driverProfile'
      },
      buttonText: {
        today: 'Today' 
      },
      customButtons: {
        updateAvailability: {
          text: 'Update My Availability'
        },
        driverProfile: {
          text: 'My Profile'
        }
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

    // this.subscription.add(this.driverApiService.getAvailableDriversByMonthAndYear(this.currentYear, this.currentMonth).subscribe({
    //   next: (res: ResponseModel) => {
    //     if (res) {
    //       const data = res.body;

    //       const result = data.map(item => {
    //         return {
    //           title: ' No Of Allocations:  ' + item?.nosAllocations,
    //           date: item.availabilityHeader?.availableDate?.substring(0, 10)
    //         };
    //       });
    //       successCallback(result);
    //     }
    //   },
    //   error: (res: ResponseModel) => {
    //     if (res.status === StausCode.NOT_FOUND) {
    //       this.snackbarService.openSnackBar('No any available dates');
    //     }
    //     successCallback([]);
    //   }
    // }))
  }

  refreshEvents() {
    this.calendarOptions.events = this.handleEvents.bind(this);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
