import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
	Product,
	ProductService,
} from '../../services/product-service.service';

// The @Component decorator maks ApplicationComponent an Angular component.
// The export will make the class available in other classes (specifically AppModule)
@Component({
	// The view encapsulation strategy ViewEncapsulation .None to apply the styles from application .css not only to the Application- Component, but to the entire application.
	encapsulation: ViewEncapsulation.None,
	selector: 'app-application',
	styleUrls: ['./application.component.scss'],
	templateUrl: './application.component.html',
})
export class ApplicationComponent implements OnInit {
	private products: Product[] = [];

	// the private qualifier turns productService into a private member of the class. It will be accessible with this.productService.
	constructor(private productService: ProductService) {
		this.products = this.productService.getProducts();
	}

	public ngOnInit() {}
}
