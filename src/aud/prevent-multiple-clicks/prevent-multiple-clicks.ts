import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Directive({
  selector: '[audPreventMultipleClicks]',
})
export class PreventMultipleClicks implements OnInit, OnDestroy {
  @Input() debounce = 200;
  @Output() audPreventMultipleClicks = new EventEmitter<MouseEvent>();

  handleButtonClicks = new Subject<MouseEvent>();

  @HostListener('click', ['$event']) onClick(evt: MouseEvent): void {
    this.handleButtonClicks.next(evt);
  }

  ngOnInit(): void {
    this.handleButtonClicks
      .pipe(debounceTime(this.debounce))
      .subscribe(evt => this.audPreventMultipleClicks.next(evt));
  }

  ngOnDestroy(): void {
    this.handleButtonClicks.unsubscribe();
  }
}
