import BasePage from "./BasePage"
import {baseURL} from "./constants/constants"

export default class HomePage extends BasePage{
  async visit() {
    await page.goto(baseURL)
    await page.waitForSelector('#projects')
  }

}