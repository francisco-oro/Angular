import {Component} from "@angular/core";


@Component({
  selector: "gifs-search-box",
  template: `
  <h1>Search: </h1>
  <input type="text"
  class="form-control"
  placeholder="Search gifs..">
  `
})
export class SearchBoxComponent {
  constructor() {}
}
