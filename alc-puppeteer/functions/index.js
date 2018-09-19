const functions = require('firebase-functions');
const puppeteer = require('../puppeteer');
const logger = require('../test-external-log');
const exit = process.exit;

// Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.zapier = functions.https.onRequest((request, response) => {
	let { first, last, email, zip, phone, type } = request.body;

	// puppeteer(first, last, email, zip, phone, type, callback);
	logger({ first, last, email, zip, phone, type });
	response.send('Henlo!');
});
