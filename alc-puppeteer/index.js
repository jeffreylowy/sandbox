// Require Puppeteer
const puppeteer = require('puppeteer');
// Require Puppeteer function
const puppet = require('./puppeteer');

// @todo: what does the args array look like depending on the data the user submits
const [path, file, ...args] = process.argv;
const [first, last, email, zip, phone, type] = args;

const exit = process.exit;

puppet(first, last, email, zip, phone, type, exit);
