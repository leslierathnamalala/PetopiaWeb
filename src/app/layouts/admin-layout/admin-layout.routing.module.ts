import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from 'src/app/pages/activities/activities.component';
import { AdvertisementsComponent } from 'src/app/pages/advertisements/advertisements.component';
import { AppointmentsComponent } from 'src/app/pages/appointments/appointments.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { MyClinicComponent } from 'src/app/pages/my-clinic/my-clinic.component';
import { PetAdvertisingComponent } from 'src/app/pages/pet-advertising/pet-advertising.component';
import { UserListComponent } from 'src/app/pages/user-list/user-list.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { AuthGuard } from '../../utils/auth.guard';
import { PetItemAdvertisingComponent } from 'src/app/pages/pet-item-advertising/pet-item-advertising.component';

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
        component: PetAdvertisingComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'pet-shop',
        component: PetItemAdvertisingComponent,
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