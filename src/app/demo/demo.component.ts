// import browser animations module to app module
// @todo create label window component with animations in component
// Add window component to analytics component
// Add component factory stuff to analytics component

import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ transform: 'translate3d(0, 100%, 0)' }),
        animate(
          '500ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ transform: 'translate3d(0, 0%, 0)' })
        ),
      ]),
    ]),
  ],
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
