import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';
import { ConfirmComponent } from './confirmation/confirmation.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loader/loading.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    NgbModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
  ],
  declarations: [
    FooterComponent,
    SidebarComponent,
    SkeletonComponent,
    ConfirmComponent,
    LoadingComponent,
    ImageUploaderComponent
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    SkeletonComponent,
    ConfirmComponent,
    LoadingComponent,
    ImageUploaderComponent
  ]
})
export class ComponentsModule { }
