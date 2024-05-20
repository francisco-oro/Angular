import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @ViewChild('txtSearchInput')
  public searchBox!: ElementRef<HTMLInputElement>;

  @Output()
  onValue: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public placeHolder: string = '';

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

}
