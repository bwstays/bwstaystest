import HomePage from "../../pages/HomePage"
import { baseUrl,jestTimeout, timeout } from '../../config';
import { discover,contact} from '../../utils/locators';


import {defaultTimeout, userLogin, userPass} from "../../pages/constants/constants"



describe("End-To-End Test", () => {
 // const homePage = new HomePage(baseUrl, timeout);



 beforeAll(async () => {
        jest.setTimeout(jestTimeout);
        await HomePage.open();
     });




   it('Wayanad Rental Villas|Kerala Hill Station Experience|Stays', async () => {
        await HomePage.getTitle();
    });


    it("Get URL", async () => {
        await HomePage.getUrl();
     });

    it("Contact", async () => {
        const [response] = await Promise.all([page.waitForNavigation({ waitUntil: 'networkidle0', timeout:7000 }),
 		            HomePage.waitAndClick(contact)
        ]);
      });

    it("Discover", async () => {
        const [response] = await Promise.all([page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 7000 }),
 		            HomePage.waitAndClick(discover)
        ]);
      });


});