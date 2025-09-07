import { baseUrl, timeout, jestTimeout } from "../config";
import { homePageImage } from "../utils/locators";

export default class BasePage {
	constructor(path, timeout) {
		this.path = path;
		this.timeout = timeout;
		this.offline = false;
	}

	  async wait(time) {
		await page.waitForTimeout(time)
	  }



	async getTitle() {
		return await page.title();
	}

	async open() {
		try {
			if (!this.path) {
				await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: jestTimeout });
			} else {
				await page.goto(this.path, { waitUntil: 'domcontentloaded', timeout: jestTimeout });
			}
			this.offline = false;
		} catch (err) {
			// Mark offline but do not throw to allow tests to decide to skip
			this.offline = true;
			this.navigationError = err;
		}
	}

	async getUrl() {
		return await page.url();
	}

	// Expose offline status so tests can skip gracefully when navigation fails
	isOffline() {
		return !!this.offline;
	}

	//Wait for the Page to Load
	async waitForPageLoad() {
		const isVisible = await page.waitForSelector(homePageImage, { timeout: timeout, visible: true });
		return isVisible;
	}

	//wait and find a specific element with it's Selector and return Visible
	async isElementVisible(selector) {
		let isVisible = true;
		await page
			.waitForSelector(selector, { visible: true, timeout: timeout })
			.catch(() => {
				isVisible = false;
			});
		return isVisible;
	}

	// wait and find a specific element with it's XPath and return Visible
	async isXPathVisible(selector) {
		let isVisible = true;
		await page
			.waitForXPath(selector, { visible: true, timeout: timeout })
			.catch(() => {
				isVisible = false;
			});
		return isVisible;
	}

	// wait and type for the element
	async waitAndType(Selector, text) {
		await page.waitForSelector(Selector);
		await page.click(Selector, { clickCount: 3 });
		await page.keyboard.press('Backspace');
		await page.type(Selector, text);
	}

	// wait and click the element
	async waitAndClick(Selector) {
		await page.waitForSelector(Selector, {visible: true, timeout});
		return page.click(Selector);
	}

	// wait and click for the xpath selector
	async waitAndClickXpath(Selector) {
		await page.waitForXPath(Selector, {visible: true, timeout});
		const [el] = await page.$x(Selector);
		if (el) {
			await el.click();
			return true;
		}
		throw new Error(`XPath not found or not clickable: ${Selector}`);
	}

	// Get text of the element
	async getText(Selector) {
		await page.waitForSelector(Selector, {visible: true, timeout});
		const text = await page.$eval(Selector, element => element.textContent);
		return text && text.trim();
	}

	// Get Count of the elements
	async getCount(Selector) {
		await page.waitForSelector(Selector);
		const count = await page.$$eval(Selector, elements => elements.length);
		return count;
	}


}
