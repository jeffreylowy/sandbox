const puppeteer = require('puppeteer');
const processCSV = require('./read-csv');

// @todo: what does the args array look like depending on the data the user submits
const [path, file, ...args] = process.argv;
const [first, last, email, zip, phone, type] = args;

// node index.js ./leads.csv
processCSV(args[0]);
