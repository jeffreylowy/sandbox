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
    // Listen for keydown events on the document and filter out keys that are
    // not numbers (i.e. * % /)
    this.numberKeyValues = fromEvent(document, 'keypress').pipe(
      filter(this.filterDigitKeys),
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
        // buffer keypresses - collecting values for 250ms
        buffer(this.numberKeyValues.pipe(debounceTime(250))),
        switchMap(this.joinKeyPresses)
      )
      .subscribe(this.focusInput);
  }

  ngOnDestroy() {
    if (this.numberKeysSubscription) {
      this.numberKeysSubscription.unsubscribe();
    }
  }

  filterDigitKeys(keyPress: KeyboardEvent) {
    return (
      keyPress.code.toLowerCase().startsWith('digit') &&
      !isNaN(Number(keyPress.key))
    );
  }

  focusInput(inputToLocate: number): void {
    console.log('index of input to locate: ', inputToLocate - 1);
  }

  joinKeyPresses(digitsArray: string[]): Observable<number> {
    // Keep only the first two digit keys pressed.
    return of(Number(digitsArray.join('').slice(0, 2)));
  }

  test(event) {
    const regex = /^\d+$/.test(event.key);
    console.log('event', event, 'regex', regex);
  }
}
