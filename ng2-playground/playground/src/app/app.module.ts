import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogFormComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    DialogComponent,
    DialogFormComponent,
  ],
  entryComponents: [DialogComponent, DialogFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
