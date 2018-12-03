import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDialogModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatDialogModule, MatSelectModule, MatFormFieldModule],
  exports: [
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
})
export class MaterialModule {}
