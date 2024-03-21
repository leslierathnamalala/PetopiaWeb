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
    ECommerceComponent
  ]
})
export class EcommerceLayoutModule { }