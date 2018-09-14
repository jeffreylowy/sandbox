const puppeteer = require('puppeteer');
const formURL =
	'https://actnow.tofighthiv.org/site/SSurvey?ACTION_REQUIRED=URI_ACTION_USER_REQUESTS&SURVEY_ID=';
const formID = '35573';

async function puppet(first, last, email, zip, phone, type, callback) {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();

	await page.goto(`${formURL}${formID}`, { waitUntil: 'networkidle2' });

	// Wait for the submit button to render on the page.
	await page.waitForSelector('#ACTION_SUBMIT_SURVEY_RESPONSE');

	await page.type('#cons_first_name', first);
	await page.type('#cons_last_name', last);
	await page.type('#cons_email', email);
	await page.type('#cons_zip_code', zip);
	await page.type('#cons_phone', phone);

	// Uncheck the remember me input[type=checkbox]
	await page.click('#s_rememberMe');

	// Click the radio button that corresponds to the user's selected input.
	switch (type) {
		case 'cyclist':
			await page.click('input[value="cyclist"]');
			break;
		case 'roadie':
			await page.click('input[value="roadie"]');
			break;
		case 'other':
			await page.click('input[value="other"]');
			break;
	}

	// Submit the form
	await page.click('#ACTION_SUBMIT_SURVEY_RESPONSE');

	// Close the browser after page has been submitted
	//@todo: Test for success/next page or page error Blackbaud form submission error.
	const navigationPromise = page.waitForNavigation({ waitUntil: 'networkidle0' });
	await navigationPromise;
	await browser.close();
	callback();
}

module.exports = puppet;
