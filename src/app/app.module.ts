import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FlexFormModule } from './flex-form/flex-form.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from './charts/charts.module';
import { SelectComponent } from './select/select.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogFormComponent } from './dialog/dialog.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AnimationsComponent } from './animations/animations.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer, counterReducer2 } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';
import { DemoComponent } from './demo/demo.component';
import { NavComponent } from './nav/nav.component';
import { SanityTestComponent } from './sanity-test/sanity-test.component';
import { KeyboardEventsComponent } from './keyboard-events/keyboard-events.component';
import { KeyboardFabComponent } from './keyboard-fab/keyboard-fab.component';
import { RxAnimationsComponent } from './rx-animations/rx-animations.component';
import { CryptoComponent } from './crypto/crypto.component';
// import { EnumSelectComponent } from './enum-select/enum-select.component';
import { CustomFormsModule } from './forms/forms.module';
import { SubjectsModule } from './subjects/subjects.module';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    DialogComponent,
    DialogFormComponent,
    AutocompleteComponent,
    AnimationsComponent,
    DemoComponent,
    NavComponent,
    SanityTestComponent,
    KeyboardEventsComponent,
    KeyboardFabComponent,
    RxAnimationsComponent,
    CryptoComponent,
    // EnumSelectComponent,
  ],
  entryComponents: [DialogComponent, DialogFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    SubjectsModule,
    FlexFormModule,
    StoreModule.forRoot({ count: counterReducer, count2: counterReducer2 }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
