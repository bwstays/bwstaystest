import BasePage from "./BasePage";
import { baseUrl, timeout } from "../config";

export default class LoginPage extends BasePage {

  async visit() {
    await page.goto(`${baseUrl}index.html`)
  }

  async isLoginFormDisplayed() {
    await page.waitForSelector("#login_form")
    await page.waitForSelector("#user_login")
    await page.waitForSelector("#user_password")
    await page.waitForSelector("#form-actions-submit")
  }


}