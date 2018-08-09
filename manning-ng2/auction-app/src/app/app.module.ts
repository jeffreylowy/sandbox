import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ApplicationComponent } from "./components/application/application.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavComponent } from "./components/nav/nav.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { SearchComponent } from "./components/search/search.component";
import { StarsComponent } from "./components/stars/stars.component";

import { ProductService } from "./services/product-service.service";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ApplicationComponent,
    CarouselComponent,
    FooterComponent,
    NavComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  // Declaring a provider for a service is required by the dependency injection mechanism.
  providers: [ProductService]
})
export class AppModule {}
