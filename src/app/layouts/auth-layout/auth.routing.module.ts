import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { AppointmentsAddComponent } from 'src/app/pages/appointment-add/appointment-add.component';

export const AuthLayoutRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'appointment',
        component: AppointmentsAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(AuthLayoutRoutes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }