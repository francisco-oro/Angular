import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {debounceTime, Subject, Subscription} from "rxjs";

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @ViewChild('txtSearchInput')
  public searchBox!: ElementRef<HTMLInputElement>;

  @Output()
  onValue: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public placeHolder: string = '';

  @Input()
  public initialValue: string = '';


  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm);
  }

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(500),
      )
      .subscribe(searchTerm => {
        this.onDebounce.emit(searchTerm);
      })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }
}
