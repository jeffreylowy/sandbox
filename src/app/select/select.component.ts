import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Increment, Increment2, Decrement, Reset } from '../reducers';

export interface SelectEvent {
  eventType: 'add' | 'remove';
  componentRef: SelectComponent;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  index: number | undefined = undefined;
  cars$: Observable<string[]>;
  foods: string[];
  foods$: Observable<string[]>;
  count$: Observable<number>;
  count2$: Observable<number>;
  selected = '';
  disableInput = false;
  @Output() selection = new EventEmitter<SelectEvent>();
  @Input() set disabled(disable: boolean | undefined) {
    if (disable !== undefined) {
      console.log('>>>>', disable);
      this.disableInput = disable;
    }
  }
  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');
    this.count2$ = this.store.select('count2');
  }

  ngOnInit() {
    this.foods = ['apple', 'pizza', 'meatballs', 'ice cream'];
    this.cars$ = of([]);
    this.foods$ = of(this.foods);
  }

  addComp() {
    this.selection.emit({ eventType: 'add', componentRef: this });
  }

  removeComp() {
    this.selection.emit({ eventType: 'remove', componentRef: this });
  }
}
