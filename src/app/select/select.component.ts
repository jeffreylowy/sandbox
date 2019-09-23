import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Increment, Increment2, Decrement, Reset } from '../reducers';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  cars$: Observable<string[]>;
  foods: string[];
  foods$: Observable<string[]>;
  count$: Observable<number>;
  count2$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');
    this.count2$ = this.store.select('count2');
  }

  ngOnInit() {
    this.foods = ['apple', 'pizza', 'meatballs', 'ice cream'];
    this.cars$ = of([]);
    this.foods$ = of(this.foods);
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  increment2() {
    this.store.dispatch(new Increment2());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
