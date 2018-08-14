import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-stars',
	styleUrls: ['./stars.component.scss'],
	templateUrl: './stars.component.html',
})
export default class StarsComponent implements OnInit {
	@Input()
	count: number = 5;
	@Input()
	rating: number = 0;
	stars: boolean[] = [];

	public ngOnInit() {
		for (let i = 1; i <= this.count; i++) {
			this.stars.push(i > this.rating);
		}
	}
}
