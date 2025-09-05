export default class TopBar {

  async isTopBarDisplayed() {
    await page.waitForSelector(".about-section")
    await page.waitForSelector("#aboutSection")
   }

  async clickSignInButton(){
    await page.click("#signin_button")
  }

}