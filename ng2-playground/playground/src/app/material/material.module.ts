import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDialogModule,
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatDialogModule, MatSelectModule, MatFormFieldModule, MatAutocompleteModule],
  exports: [
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ],
})
export class MaterialModule {}
