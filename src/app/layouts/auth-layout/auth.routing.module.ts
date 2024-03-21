import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';

export const AuthLayoutRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(AuthLayoutRoutes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }