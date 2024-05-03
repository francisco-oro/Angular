import { NgModule } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

import {HeroComponent} from "./hero/hero.component";
import {ListComponent} from "./list/list.component";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    NgIf,
    NgForOf
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule {}
