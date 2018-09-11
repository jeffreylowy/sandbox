const puppeteer = require("puppeteer");
const puppeteer_func = require("./puppeteer");
const pageURL =
  "https://actnow.tofighthiv.org/site/SSurvey?ACTION_REQUIRED=URI_ACTION_USER_REQUESTS&SURVEY_ID=35573";
const submitBtn =
  'html > body > form > div.appArea > p > input[type="submit"]#ACTION_SUBMIT_SURVEY_RESPONSE';

/**
 * @param {string} first the user's first name.
 * @param {string} last the user's last name.
 * @param {string} zip the user's zipe code.
 * @param {string} email the user's email address.
 * @param {string} phone the user's phone number.
 * @param {string} type the user's participant type.
 */
// async function submitForm(first, last, zip, email, phone, type) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Go to page
//   await page.goto(pageURL);

//   // Wait for the submit button to render on the page.
//   await page.waitForSelector(submitBtn);
//   // Click the submit butotn when form has been completed.
//   await page.click(submitBtn);

//   await browser.close();
// }

puppeteer_func("henlo, fren");
