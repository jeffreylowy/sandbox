import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  foods: string[];
  constructor() {}

  ngOnInit() {
    this.foods = ['apple', 'pizza', 'meatballs', 'ice cream'];
  }
}
