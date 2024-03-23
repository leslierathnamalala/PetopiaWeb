import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../../pages/landing-page/landing-page.component';
import { ECommerceComponent } from 'src/app/pages/e-commerce/e-commerce.component';
import { ClinicsComponent } from 'src/app/pages/clinics/clinics.component';
import { PetShopComponent } from 'src/app/pages/pet-shop/pet-shop.component';
import { MarketPlaceComponent } from 'src/app/pages/market-place/market-place.component';
import { AppointmentsAddComponent } from 'src/app/pages/appointment-add/appointment-add.component';

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
    },
    {
        path: 'pet-shop',
        component: PetShopComponent
    },
    {
        path: 'marketplace',
        component: MarketPlaceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(AuthLayoutRoutes)],
    exports: [RouterModule]
})

export class ECommerceRoutingModule { }