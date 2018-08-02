// Parse CSV file.
// d3.csv('csv/LCRM.csv', (data) => {
// 	console.log(data['Convio ID']);
// });

const svg = d3.select('svg');
console.log(svg);

const row = (d) => {
	d['Total Raised'] = +d['Total Raised'];
	return d;
};

d3.csv('csv/LCRM.csv', row).then((data) => {
	svg.selectAll('circle')
		.data(data)
		.enter()
		.append('circle')
		.attr('cx', (d) => d['Total Raised'] * (5 * Math.random()))
		.attr('cy', 10 * (25 + Math.random()))
		.attr('r', 15)
		.attr('fill', 'red');
});
