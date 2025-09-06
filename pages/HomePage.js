import BasePage from "./BasePage"
import { baseUrl, timeout } from "../config";

import {  discover, contact} from '../utils/locators';


 class HomePage extends BasePage{


    constructor() {
        super(baseUrl, timeout);
    }


    async open() {
        await super.open();
        //await super.waitForPageLoad();
    }
/*  async visit() {
    await this.goto(baseUrl)
   }
   */

	async verifyTitle() {
		return await this.getTitle({ visible: true });
	}


    async contact() {
        return await this.isElementVisible(contact);
    }


	async clickContact() {
		 return await this.waitAndClick(contact);

	}

	async clickDiscover() {
		 return await this.waitAndClick(discover);

	}




}

export default new HomePage();