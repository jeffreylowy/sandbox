/**
 * Parsing CSV files and displaying random scattered points in an SVG.
 */

const svg = d3.select('svg');
console.log(svg);

const row = (d) => {
	d['Total Raised'] = +d['Total Raised'];
	return d;
};

const getRandomArbitrary = (min, max) => {
	return Math.random() * (max - min) + min;
};

const colors = [
	'red',
	'green',
	'blue',
	'orange',
	'yellow',
	'purple',
	'black',
	'brown',
];

d3.csv('csv/LCRM.csv', row).then((data) => {
	svg.selectAll('circle')
		.data(data)
		.enter()
		.append('circle')
		.attr('cx', (d) => d['Total Raised'] * getRandomArbitrary(1, 7))
		.attr('cy', (d) => d['Total Raised'] * getRandomArbitrary(1, 7))
		.attr('r', (d) => d['Total Raised'] / 25)
		.attr('fill', () => colors[Math.round(getRandomArbitrary(1, 7))]);
});
