import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
