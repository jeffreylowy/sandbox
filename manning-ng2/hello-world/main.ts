import { Component } from "@angular/core";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// Component
@Component({
  selector: "hello-world",
  templateUrl: "./template.ng",
  styleUrls: ["./styles.css"]
})
class HelloWorldComponent {
  name: string;

  constructor() {
    this.name = "Angular";
  }
}

// Module
@NgModule({
  imports: [BrowserModule],
  declarations: [HelloWorldComponent],
  bootstrap: [HelloWorldComponent]
})
export class AppModule {}

// App bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);
