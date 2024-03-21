import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  template: `
  <div style="width: 30vw !important">
      <h2>Confirmation</h2>
          <div> {{confirmationMessage}}  </div>
      <div class="dialog-footer mt-4">
        <button mat-stroked-button color="primary" class="float-left" (click)="close(false)">No</button>
        <button mat-raised-button color="primary" class="float-right" (click)="close(true)">Yes</button>
      </div>
  </div>  
`
})
export class ConfirmComponent implements OnInit {
  confirmationMessage: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit(): void {
    this.confirmationMessage = this.data;
  }

  close(isConfirmed: boolean): void {
    this.dialogRef.close(
      isConfirmed
    );
  }
}
