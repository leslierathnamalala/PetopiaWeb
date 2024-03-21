import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../../pages/landing-page/landing-page.component';
import { ECommerceComponent } from 'src/app/pages/e-commerce/e-commerce.component';
import { ClinicsComponent } from 'src/app/pages/clinics/clinics.component';

export const AuthLayoutRoutes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'home',
        component: LandingPageComponent
    },
    {
        path: 'e-commerce',
        component: ECommerceComponent
    },
    {
        path: 'clinics',
        component: ClinicsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(AuthLayoutRoutes)],
    exports: [RouterModule]
})

export class ECommerceRoutingModule { }