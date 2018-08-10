import { Component, Input } from '@angular/core';
import { Product } from '../../services/product-service.service';
import StarsComponent from '../stars/stars.component';

@Component({
	selector: 'app-product-item',
	templateUrl: './product-item.component.html',
	styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
	// The value for this property will be exposed to the parent component
	@Input()
	product: Product;
}
