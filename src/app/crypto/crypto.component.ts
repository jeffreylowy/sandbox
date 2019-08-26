import { Component, OnInit } from '@angular/core';

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
    getPosition: () => '1234567890',
    getProjectId: () => 'AT&T',
  };

  constructor() {}

  ngOnInit() {}

  copyTranscriptData(): string[] {
    const data = [
      this.message.getTranscriptId(),
      this.message.getPosition(),
      this.message.getProjectId(),
    ];

    console.log(data);
    return data;
  }
}
