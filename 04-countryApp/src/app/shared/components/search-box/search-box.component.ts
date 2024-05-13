import {Component, Input, Output} from '@angular/core';
import EventEmitter from "node:events";

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {


  @Input()
  public placeHolder: string = '';

  // @ts-ignore
  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>();
}
