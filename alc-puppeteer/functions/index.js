const functions = require('firebase-functions');

// Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.zapier = functions.https.onRequest((request, response) => {
	console.log('-->', request.body);
	response.send('hello');
});
