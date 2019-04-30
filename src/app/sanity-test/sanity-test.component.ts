import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanity-test',
  templateUrl: './sanity-test.component.html',
  styleUrls: ['./sanity-test.component.scss'],
})
export class SanityTestComponent implements OnInit {
  name = 'Jeff';
  constructor() {}

  ngOnInit() {}
}
