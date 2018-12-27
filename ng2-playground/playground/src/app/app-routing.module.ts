import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './select/select.component';
import { DialogComponent } from './dialog/dialog.component';
import {AutocompleteComponent} from './autocomplete/autocomplete.component';


const routes: Routes = [
  { path: 'select', component: SelectComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
