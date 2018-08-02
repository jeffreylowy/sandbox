/**
 * Parsing CSV files and displaying random scattered points in an SVG.
 */

//import d3 from './d3';

const svg = d3.select('svg');
const svgWidth = svg.attr('width');
const svgHeight = svg.attr('height');
console.log(svg);

const row = (d) => {
	d['Total Raised'] = Number(d['Total Raised']);
	return d;
};

const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

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
	xScale
		.domain([
			d3.min(data, (d) => d['Total Raised']),
			d3.max(data, (d) => d['Total Raised']),
		])
		.range([0, svgWidth]);

	yScale
		.domain([
			d3.min(data, (d) => d['Total Raised']),
			d3.max(data, (d) => d['Total Raised']),
		])
		.range([0, svgHeight]);

	svg.selectAll('circle')
		.data(data)
		.enter()
		.append('circle')
		.attr('cx', (d) => xScale(d['Total Raised']))
		.attr('cy', (d) => yScale(d['Total Raised']) * getRandomArbitrary(1, 7))
		.attr('r', 10)
		.attr('fill', () => colors[Math.round(getRandomArbitrary(1, 7))]);
});
