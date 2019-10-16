import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';

@NgModule({
  declarations: [SubjectsComponent],
  imports: [CommonModule],
  exports: [SubjectsComponent],
})
export class SubjectsModule {}
