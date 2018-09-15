const csv = require('csvtojson');
const puppet = require('./puppeteer');
const p = process;
const exit = p.exit;

function processCSV(csvFilePath) {
	csv()
		.fromFile(csvFilePath)
		.then((jsonObj) => {
			console.log(jsonObj[0]);
			let last = jsonObj[0]['Last Name'],
				first = jsonObj[0]['First Name'],
				email = jsonObj[0]['Email'],
				phone = jsonObj[0]['Phone'],
				zip = jsonObj[0]['Zip Code'],
				type = jsonObj[0]['Type'].toLowerCase();
			puppet(first, last, email, zip, phone, type, exit);
		});
}

module.exports = processCSV;
