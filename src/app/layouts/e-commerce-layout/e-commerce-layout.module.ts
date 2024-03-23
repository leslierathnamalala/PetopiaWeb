import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { ComponentsModule } from '../../components/components.module';
import { MaterialModule } from '../../material/material.module';
import { ECommerceRoutingModule } from './e-commerce-layout.routing.module';
import { LandingPageComponent } from '../../pages/landing-page/landing-page.component';
import { ECommerceComponent } from 'src/app/pages/e-commerce/e-commerce.component';
import { ClinicsComponent } from 'src/app/pages/clinics/clinics.component';
import { PetShopComponent } from 'src/app/pages/pet-shop/pet-shop.component';
import { PetShopItemsComponent } from 'src/app/pages/pet-shop/pet-shop-items/pet-shop-items.component';
import { MarketPlaceComponent } from 'src/app/pages/market-place/market-place.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClipboardModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    ECommerceRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    LandingPageComponent,
    ECommerceComponent,
    ClinicsComponent,
    PetShopComponent,
    PetShopItemsComponent,
    MarketPlaceComponent
  ]
})
export class EcommerceLayoutModule { }
