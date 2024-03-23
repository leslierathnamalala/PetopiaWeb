import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ActivitiesComponent } from 'src/app/pages/activities/activities.component';
import { AdvertisementsComponent } from 'src/app/pages/advertisements/advertisements.component';
import { AppointmentsComponent } from 'src/app/pages/appointments/appointments.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { MyClinicComponent } from 'src/app/pages/my-clinic/my-clinic.component';
import { PetAdvertisingComponent } from 'src/app/pages/pet-advertising/pet-advertising.component';
import { PetItemAdvertisingComponent } from 'src/app/pages/pet-item-advertising/pet-item-advertising.component';
import { UserListComponent } from 'src/app/pages/user-list/user-list.component';
import { ComponentsModule } from '../../components/components.module';
import { MaterialModule } from '../../material/material.module';
import { SchedulerComponent } from '../../pages/scheduler/scheduler.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { CustomDateFormat } from '../../utils/date-format-pipe';
import { CustomDateTimeFormat } from '../../utils/date-time-format-pipe';
import { NoSpacesDirective } from '../../utils/directive/no-space.directive';
import { AdminLayoutRoutingModule } from './admin-layout.routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MaterialModule,
    ReactiveFormsModule,
    AdminLayoutRoutingModule,
    ComponentsModule,
    NgxDropzoneModule,
    ScrollingModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FullCalendarModule
  ],
  declarations: [
    CustomDateFormat,
    CustomDateTimeFormat,
    UserProfileComponent,
    SchedulerComponent,
    NoSpacesDirective,
    ActivitiesComponent,
    AdvertisementsComponent,
    PetAdvertisingComponent,
    PetItemAdvertisingComponent,
    AppointmentsComponent,
    DashboardComponent,
    MyClinicComponent,
    UserListComponent
  ],
  providers: [provideNgxMask()]
})

export class AdminLayoutModule { }
