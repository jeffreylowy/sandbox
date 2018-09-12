const puppeteer = require('puppeteer');
const formURL =
	'https://actnow.tofighthiv.org/site/SSurvey?ACTION_REQUIRED=URI_ACTION_USER_REQUESTS&SURVEY_ID=';
const surveyID = '35573';

/**
 * @param {string} first the user's first name.
 * @param {string} last the user's last name.
 * @param {string} zip the user's zipe code.
 * @param {string} email the user's email address.
 * @param {string} phone the user's phone number.
 * @param {string} type the user's participant type.
 */
async function puppet(first, last, zip, email, phone, type) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto(`${formURL}${surveyID}`);

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
			await page.click('fieldset #1999_35573_2_18579_1');
			break;
		case 'roadie':
			await page.click('fieldset #1999_35573_2_18579_2');
			break;
		case 'other':
			await page.click('fieldset #1999_35573_2_18579_3');
			break;
	}

	// Submit the form
	await page.click('#ACTION_SUBMIT_SURVEY_RESPONSE');

	// Close the browser after page has been submitted
	//@todo: Test for success/next page or page error Blackbaud form submission error.
	const navigationPromise = page.waitForNavigation();
	await navigationPromise;
	await browser.close();
}
