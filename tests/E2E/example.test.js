import HomePage from "../../pages/HomePage"
import { baseUrl,jestTimeout, timeout } from '../../config';
import { discover,contact} from '../../utils/locators';


import {defaultTimeout, userLogin, userPass} from "../../pages/constants/constants"

// Ensure longer timeout is applied to hooks and tests in this file
jest.setTimeout(jestTimeout);


describe("End-To-End Test", () => {
 // const homePage = new HomePage(baseUrl, timeout);


 beforeAll(async () => {
        await HomePage.open();
     }, jestTimeout);




   it('Wayanad Rental Villas|Kerala Hill Station Experience|Stays', async () => {
        await HomePage.getTitle();
    });


    it("Get URL", async () => {
        await HomePage.getUrl();
     });

    it("Contact", async () => {
        await HomePage.clickContact();
        await page.waitForSelector('#signup', { visible: true, timeout });
      });

    it("Discover", async () => {
        await HomePage.clickDiscover();
        await page.waitForSelector('#discovered', { visible: true, timeout });
      });


});