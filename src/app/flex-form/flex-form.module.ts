import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexFormComponent } from './flex-form.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [FlexFormComponent],
  exports: [FlexFormComponent],
  imports: [CommonModule, MaterialModule],
})
export class FlexFormModule {}
