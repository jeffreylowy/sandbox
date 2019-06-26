import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { fromEvent, of, Observable, Subscription } from 'rxjs';
import {
  debounceTime,
  filter,
  map,
  tap,
  buffer,
  throttleTime,
  switchMap,
  distinctUntilChanged,
} from 'rxjs/operators';

@Component({
  selector: 'app-keyboard-events',
  templateUrl: './keyboard-events.component.html',
  styleUrls: ['./keyboard-events.component.scss'],
})
export class KeyboardEventsComponent
  implements OnInit, AfterViewInit, OnDestroy {
  afterViewInit = false;
  numberKeyValues: Observable<string>;
  numberKeysSubscription: Subscription | null;

  constructor(private renderer: Renderer2) {
    // Listen for keydown events on the document and filter for digit keys
    this.numberKeyValues = fromEvent(document, 'keydown').pipe(
      filter((keyPress: KeyboardEvent) => {
        return (
          keyPress.code.toLowerCase().startsWith('digit') &&
          !isNaN(Number(keyPress.key))
        );
      }),
      map((digkitKeyPress) => digkitKeyPress.key)
    );
  }

  ngOnInit() {
    this.renderer.listen(document, 'keydown.alt', (event) => {
      console.log('alt 1');
    });
  }

  ngAfterViewInit() {
    this.numberKeysSubscription = this.numberKeyValues
      .pipe(
        // collect key press values for 250ms
        buffer(this.numberKeyValues.pipe(debounceTime(250))),
        switchMap((numArray) => {
          // Keep only the first two digits the user types
          return of(Number(numArray.join('').slice(0, 2)) - 1);
        })
      )
      .subscribe(this.focusInput);
  }

  ngOnDestroy() {
    if (this.numberKeysSubscription) {
      this.numberKeysSubscription.unsubscribe();
    }
  }

  focusInput(keys: any): void {
    console.log('index of input to locate: ', keys);
  }

  test(event) {
    const regex = /^\d+$/.test(event.key);
    console.log('event', event, 'regex', regex);
  }
}
