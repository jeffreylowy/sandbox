import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-keyboard-events',
  templateUrl: './keyboard-events.component.html',
  styleUrls: ['./keyboard-events.component.scss'],
})
export class KeyboardEventsComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen(document, 'keydown.alt', (event) => {
      console.log('alt 1');
    });
  }

  test(event) {
    const regex = /^\d+$/.test(event.key);
    console.log('event', event, 'regex', regex);
  }
}
