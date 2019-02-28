import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';
  display = false;

  openWindow() {
    this.display = true;
  }

  closeWindow() {
    this.display = false;
  }
}
