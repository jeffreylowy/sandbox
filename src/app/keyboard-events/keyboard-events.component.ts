import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-keyboard-events',
  templateUrl: './keyboard-events.component.html',
  styleUrls: ['./keyboard-events.component.scss'],
})
export class KeyboardEventsComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen(document, 'keydown.alt.k', () => {
      console.log('meta cmd key');
    });
  }
}
