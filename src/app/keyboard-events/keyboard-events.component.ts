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
  digitKeyPressValues: Observable<string>;
  digitKeysSubscription: Subscription | null;

  constructor(private renderer: Renderer2) {
    // Listen for keydown events on the document and filter out keys that are
    // not numbers (i.e. * % /)
    this.digitKeyPressValues = fromEvent(document, 'keypress').pipe(
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
    this.digitKeysSubscription = this.digitKeyPressValues
      .pipe(
        // buffer keypresses - collecting values for 250ms
        buffer(this.digitKeyPressValues.pipe(debounceTime(250))),
        switchMap(this.joinKeyPresses)
      )
      .subscribe(this.focusInput);
  }

  ngOnDestroy() {
    if (this.digitKeysSubscription) {
      this.digitKeysSubscription.unsubscribe();
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

  test(event, input) {
    console.log('event', event, 'input', input);
  }
}
