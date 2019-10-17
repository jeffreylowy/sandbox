// Understanding rxjs Subjects:
// https://hackernoon.com/understanding-rxjs-subjects-339428a1815b

// Understanding rxjs BehaviorSubject, ReplaySubject and AsyncSubject:
// https://medium.com/@luukgruijs/understanding-rxjs-behaviorsubject-replaysubject-and-asyncsubject-8cc061f1cfc0

import {
  Component,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit, OnDestroy {
  subject$ = new BehaviorSubject(0);
  data = [1, 2, 3, 4];
  @Input() length: string;
  @Output() number = new EventEmitter<number>();

  constructor() {
    this.subject$.subscribe((num) => {
      this.number.emit(num);
    });
  }

  ngOnInit() {
    console.log(this.length, typeof this.length);
  }

  ngOnDestroy() {
    this.subject$.unsubscribe();
  }

  incrementSubject(val: number) {
    this.subject$.next(val + 1);
  }

  decrementSubject(val: number) {
    this.subject$.next(val - 1);
  }
}
