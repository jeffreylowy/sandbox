import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, merge, timer } from 'rxjs';
import { takeUntil, repeat, startWith, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rx-animations',
  templateUrl: './rx-animations.component.html',
  styleUrls: ['./rx-animations.component.scss'],
})
export class RxAnimationsComponent implements OnInit {
  @ViewChild('paragraph') paragraph: ElementRef<HTMLElement> | null = null;

  constructor() {}

  ngOnInit() {
    if (this.paragraph) {
      const el = this.paragraph.nativeElement;
      const enter = fromEvent(el, 'mouseenter');
      const leave = fromEvent(el, 'mouseleave');
      const changeHsl = enter.pipe(
        switchMap(() => {
          return timer(0, 100).pipe(
            tap(this.updateBackground),
            takeUntil(leave),
            tap((x) => console.log('tap2'))
          );
        })
      );
      changeHsl.subscribe((x) => console.log(x));
    }
  }

  updateBackground(x) {
    if (this.paragraph) {
      (this.paragraph as E).style.background = `hsl(${x}, 100%, 45%)`;
      (this.paragraph as HTMLElement).textContent = String(x);
    }
  }
}
