import {RouterModule, Routes} from "@angular/router";
import {SelectorPageComponent} from "./pages/selector-page/selector-page.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
  { path: "**", component: SelectorPageComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export  class CountriesRoutingModule { }
