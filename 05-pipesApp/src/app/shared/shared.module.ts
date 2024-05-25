import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
