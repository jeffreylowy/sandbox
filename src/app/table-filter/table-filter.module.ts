import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFilterComponent } from './table-filter.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [TableFilterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TableFilterComponent],
})
export class TableFilterModule {}
