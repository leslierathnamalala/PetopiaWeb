import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { ComponentsModule } from '../../components/components.module';
import { MaterialModule } from '../../material/material.module';
import { LoginComponent } from '../../pages/login/login.component';
import { AuthRoutingModule } from './auth.routing.module';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { AppointmentsAddComponent } from 'src/app/pages/appointment-add/appointment-add.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

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
    AuthRoutingModule,
    ComponentsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    AppointmentsAddComponent
  ],
  providers: [provideNgxMask()]
})
export class AuthLayoutModule { }
