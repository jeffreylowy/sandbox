import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  formData: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  formData: string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '250px',
      data: { formData: this.formData },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed');
      this.formData = result;
    });
  }
}

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
})
export class DialogFormComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
