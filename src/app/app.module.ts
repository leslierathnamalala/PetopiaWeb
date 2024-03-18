import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { CompAComponent } from './components/comp-a/comp-a.component';
import { CompBComponent } from './components/comp-b/comp-b.component';
import { CompMasterComponent } from './components/comp-master/comp-master.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLayoutComponent,
    CompAComponent,
    CompBComponent,
    CompMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
