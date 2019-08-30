import { Component, OnInit } from '@angular/core';

type API = 'TEST' | 'ANOTHER_TEST';
type MODE = {
  [key in API]: string;
};

@Component({
  selector: 'app-enum-select',
  templateUrl: './enum-select.component.html',
  styleUrls: ['./enum-select.component.scss'],
})
export class EnumSelectComponent implements OnInit {
  obj: MODE = {
    TEST: 'test',
    ANOTHER_TEST: 'test 2',
  };

  constructor() {
    console.log(this.obj);
  }

  ngOnInit() {}
}
