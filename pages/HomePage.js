import BasePage from "./BasePage"
import {baseURL} from "./constants/constants"

export default class HomePage extends BasePage{
  async visit() {
    await page.goto(baseURL)
    await page.waitForSelector('#nav')
  }
  
  async isNavbarDisplayed() {
    await page.waitForSelector('#pages-nav')
    await page.waitForSelector('#homeMenu')
    await page.waitForSelector('#onlineBankingMenu')
    await page.waitForSelector('#feedback')
  }
  
  async clickHomepageLink(){
    await page.click('#homeMenu')
  }

  async clickOnlineBankingMenuLink(){
    await page.click('#onlineBankingMenu')
  }

  async clickFeedbackLink(){
    await page.click('#feedback')
  }
}