import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { filter, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-keyboard-fab',
  templateUrl: './keyboard-fab.component.html',
  styleUrls: ['./keyboard-fab.component.scss'],
})
export class KeyboardFabComponent implements OnInit {
  winWidth = window.innerWidth || 0;
  mouseMoves = fromEvent(document, 'mousemove').pipe(
    filter((m: MouseEvent) => {
      return this.winWidth - 132 < m.clientX;
    })
  );
  resize = fromEvent(window, 'resize').pipe(
    map((w: UIEvent) => {
      return (w.target as Window).innerWidth;
    })
  );

  constructor() {
    this.resize.subscribe((r: number) => {
      this.winWidth = r;
    });

    this.mouseMoves.subscribe((m: MouseEvent) => {
      console.clear();
      console.log('move', m.clientX);
    });
  }

  openNav() {
    console.log('dispatch event');
  }

  ngOnInit() {}
}
