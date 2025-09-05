import BasePage from "./BasePage";
import { baseURL } from './constants/constants.js'

export default class LoginPage extends BasePage {

  async visit() {
    await page.goto(`${baseURL}login.html`)
  }

  async isLoginFormDisplayed() {
    await page.waitForSelector("#login_form")
    await page.waitForSelector("#user_login")
    await page.waitForSelector("#user_password")
    await page.waitForSelector("#form-actions-submit")
  }

  /**
   * User authorization on the site.
   * 
   * @param {string} login User to login to the site.
   * @param {string} password Password
   * 
   * @example
   * ```js
   * await loginPage.login("username","password")
   * ```
   */
  async login(login, password) {
    await page.waitForSelector("#login_form")
    await page.type("#user_login", login)
    await page.type("#user_password", password)
    await page.click("#form-actions-submit")
  }
}