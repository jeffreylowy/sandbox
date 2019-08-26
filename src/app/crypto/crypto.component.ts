import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { stringify } from '@angular/core/src/render3/util';

/**
 * Crypto Docs
 * https://github.com/mdn/dom-examples/tree/master/web-crypto/encrypt-decrypt
 * https://github.com/mdn/dom-examples/blob/master/web-crypto/encrypt-decrypt/rsa-oaep.js
 * https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto
 * https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey
 * https://www.w3schools.com/jsref/jsref_decodeuricomponent.asp
 * https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
 */

/**
 * dec = encodeURIComponent(a)
 * decodeURIComponent(dec)
 * Array.from(decodeURIComponent(dec))
 * Array.from(decodeURIComponent(dec).split(","))
 * arr = Array.from(decodeURIComponent(dec).split(",")).map(x=> Number(x))
 * final  = new TextDecoder(new Uint8Array(arr))
 * final  = new TextDecoder().decode(new Uint8Array(arr))
 * ??? btoa(encodeURI("983209483291822312309"))
 */

/**
 * TODO:
 * 1) Dispatch transcript data on click
 * 2) Process in NgRx Side effect
 * 3)
 */

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {
  heroes$: Observable<any>;
  message = {
    getContent: () => {
      return `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Consectetur magni tempore, modi ullam qui perspiciatis iste deleniti
      molestias doloribus. Laborum laboriosam ut vel commodi aliquid repellat
      laudantium iure possimus odio.`;
    },
    getTranscriptId: () => '1234567890',
    getPosition: () => '2',
    getProjectId: () => 'AT&T',
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const values = crypto.getRandomValues(new Uint8Array(12));
    console.log('getRandomValues', values);

    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params) => {
        // (+) before `params.get()` turns the string into a number
        console.log('params', params);
        return of(params);
      })
    );

    this.heroes$.subscribe();
  }

  secureMathRandom() {
    // Divide a random UInt32 by the maximum value (2^32 -1) to get a result
    // between 0 and 1
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
  }

  copyTranscriptData(): string[] {
    const data = [
      this.message.getProjectId(),
      this.message.getTranscriptId(),
      this.message.getPosition(),
    ];

    // const a = btoa(encodeURIComponent(data.toString()));
    // const b = atob(a);
    // const c = decodeURIComponent(b);

    // console.log('a', a, 'b', b, 'c', c, 'rand', this.secureMathRandom());
    const dataAsString = data.toString();
    const encodedData = new TextEncoder().encode(dataAsString);
    const encodedDataAsString = encodedData.toString();
    const encodedBtoA = btoa(encodeURIComponent(encodedDataAsString));
    console.log('encodedBtoA', data, encodedBtoA);

    // this.router.navigate([`crypto/${a}`]);

    return data;
  }
}
