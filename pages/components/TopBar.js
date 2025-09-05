export default class TopBar {

  async isTopBarDisplayed() {
    await page.waitForSelector(".brand")
    await page.waitForSelector("#signin_button")
    await page.waitForSelector("#searchTerm")
  }

  async clickSignInButton(){
    await page.click("#signin_button")
  }

}