import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard-fab',
  templateUrl: './keyboard-fab.component.html',
  styleUrls: ['./keyboard-fab.component.scss'],
})
export class KeyboardFabComponent implements OnInit {
  constructor() {}

  openNav() {
    console.log('dispatch event');
  }

  ngOnInit() {}
}
