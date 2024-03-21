import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from '../components/confirmation/confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(private dialog: MatDialog) { }


  confirm(message: string): Observable<boolean> {
    const dialogRef: MatDialogRef<ConfirmComponent> = this.dialog.open(ConfirmComponent, {
      data: message,
    });

    return dialogRef.afterClosed();
  }
}
