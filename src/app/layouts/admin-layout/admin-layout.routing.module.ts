import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from 'src/app/pages/activities/activities.component';
import { AdvertisementsComponent } from 'src/app/pages/advertisements/advertisements.component';
import { AdvertisingComponent } from 'src/app/pages/advertising/advertising.component';
import { AppointmentsComponent } from 'src/app/pages/appointments/appointments.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { MyClinicComponent } from 'src/app/pages/my-clinic/my-clinic.component';
import { UserListComponent } from 'src/app/pages/user-list/user-list.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { AuthGuard } from '../../utils/auth.guard';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'advertising',
        component: AdvertisingComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'advertisements',
        component: AdvertisementsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'activities',
        component: ActivitiesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'appointments',
        component: AppointmentsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user-list',
        component: UserListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'my-clinic',
        component: MyClinicComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
})

export class AdminLayoutRoutingModule { }