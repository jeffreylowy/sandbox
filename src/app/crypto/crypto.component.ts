import { Component, OnInit } from '@angular/core';

/**
 * Crypto Docs
 * https://github.com/mdn/dom-examples/tree/master/web-crypto/encrypt-decrypt
 * https://github.com/mdn/dom-examples/blob/master/web-crypto/encrypt-decrypt/rsa-oaep.js
 * https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto
 * https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey
 * https://www.w3schools.com/jsref/jsref_decodeuricomponent.asp
 * https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
 */

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {
    var values = crypto.getRandomValues(new Uint8Array(12));
    console.log(values);
  }

  secureMathRandom() {
    // Divide a random UInt32 by the maximum value (2^32 -1) to get a result
    // between 0 and 1
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
  }

  copyTranscriptData(): string[] {
    const data = [
      this.message.getTranscriptId(),
      this.message.getPosition(),
      this.message.getProjectId(),
    ];

    const a = btoa(encodeURIComponent(data.toString()));
    const b = atob(a);
    const c = decodeURIComponent(b);

    console.log('a', a, 'b', b, 'c', c, 'rand', this.secureMathRandom());
    return data;
  }
}
