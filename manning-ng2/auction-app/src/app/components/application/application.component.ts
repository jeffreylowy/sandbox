import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  Product,
  ProductService
} from "../../services/product-service.service";

@Component({
  selector: "app-application",
  templateUrl: "./application.component.html",
  styleUrls: ["./application.component.scss"]
})
export class ApplicationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
