const puppeteer = require('./functions/utils/puppeteer');
const processCSV = require('./functions/utils/process-csv');

const [path, file, ...args] = process.argv;
const [first, last, email, zip, phone, type] = args;

// Envoke by running `node index.js ./leads.csv` from the commandline.
processCSV(args[0]);
