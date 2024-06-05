import { NgModule } from '@angular/core';
import {MenuModule} from "primeng/menu";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";
import {ToolbarModule} from "primeng/toolbar";
import {SplitButtonModule} from "primeng/splitbutton";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";



@NgModule({
  declarations: [],
  exports:[
    MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    InputTextModule,
    TableModule
  ]
})
export class PrimeNgModule { }
