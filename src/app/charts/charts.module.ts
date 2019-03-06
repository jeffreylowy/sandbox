import { NgModule } from '@angular/core';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [PieComponent],
  exports: [PieComponent],
  imports: [CommonModule, Ng2GoogleChartsModule],
})
export class ChartsModule {}
