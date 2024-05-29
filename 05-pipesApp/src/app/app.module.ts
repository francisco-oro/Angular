import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "./shared/shared.module";

// app's locale setup
import localeEsHN from '@angular/common/locales/es-HN';
import localeFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEsHN);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-HN',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
