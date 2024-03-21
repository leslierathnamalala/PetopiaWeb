import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CloudinaryService } from 'src/app/services/cloudinary/cloudinary.service';
import { SnackbarService } from 'src/app/services/core-service/snakbar.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})

export class ImageUploaderComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  files: File[] = [];
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(
    public dialogRef: MatDialogRef<ImageUploaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cloudinaryService: CloudinaryService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close({
      isRefresh: false,
      url: null
    });
  }

  onSelect(event) {
    if (this.files.length === 0) {
      this.files.push(...event.addedFiles);
    }
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onUpload(): void {
    if (!this.files[0]) {
      this.snackbarService.openSnackBar('Please upload a file');
      return;
    }

    this.loadingSubject.next(true);
    const fileData = this.files[0];
    const data = new FormData();

    data.append('file', fileData);
    data.append('upload_preset', 'petopia_images');
    data.append('cloud_name', 'ddshmfz6q');

    this.cloudinaryService.postCloudinary(data).subscribe((response) => {
      if (response) {
        this.loadingSubject.next(false);
        this.dialogRef.close({
          isRefresh: true,
          url: response.secure_url
        });
      }
    }, () => {
      this.loadingSubject.next(false);
    }, () => {
      this.loadingSubject.next(false);
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
