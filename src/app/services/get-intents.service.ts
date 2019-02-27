import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class GetIntentsService {
  data = [
    {
      count: 1,
      driver: 'Payment',
      label: 'Explain - General',
      volume: 4.23,
      handleTime: '4m 38s',
    },

    {
      count: 2,
      driver: 'Orders',
      label: 'Track - Package',
      volume: 2.23,
      handleTime: '2m 23s',
    },

    {
      count: 3,
      driver: 'Returns',
      label: 'Explain - How',
      volume: 5.13,
      handleTime: '5m 38s',
    },

    {
      count: 4,
      driver: 'Discounts',
      label: 'Show - Current',
      volume: 6.23,
      handleTime: '6m 38s',
    },
  ];
  constructor() {}

  getData() {
    return of(this.data);
  }
}
