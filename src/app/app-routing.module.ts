import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './select/select.component';
import { DialogComponent } from './dialog/dialog.component';
import { DemoComponent } from './demo/demo.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { PieComponent } from './charts/pie/pie.component';

const routes: Routes = [
  { path: 'select', component: SelectComponent },
  { path: 'pie', component: PieComponent },
  {
    path: 'select/:test',
    component: DemoComponent,
    outlet: 'label-window',
  },
  { path: 'dialog', component: DialogComponent },
  {
    path: 'autocomplete',
    component: AutocompleteComponent,
  },
  { path: '', component: DemoComponent, outlet: 'label-window' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
