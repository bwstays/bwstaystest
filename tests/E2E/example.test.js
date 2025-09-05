import HomePage from "../../pages/HomePage"
import TopBar from "../../pages/components/TopBar"
import LoginPage from "../../pages/LoginPage"
import FeedbackPage from "../../pages/FeedBackPage"
import {defaultTimeout, userLogin, userPass} from "../../pages/constants/constants"

describe("End-To-End Test", () => {
  const homePage = new HomePage()
  const topBar = new TopBar()
  const loginPage = new LoginPage()
  const feedbackPage = new FeedbackPage()

  it("Should load homepage", async () => {
    await homePage.visit()
    await homePage.isNavbarDisplayed()
  }, defaultTimeout)

  it("Should submit feedback", async () => {
    await homePage.clickFeedbackLink()
    await feedbackPage.isFeedbackFormDisplayed()
    await feedbackPage.submitFeedback(
      "Jon",
      "jon.dilly@mail.com",
      "subject",
      "Lorem ipsum"
    )
  }, defaultTimeout)

  it("Should login to application", async () => {
    await homePage.visit()
    await topBar.isTopBarDisplayed()
    await topBar.clickSignInButton()
    await loginPage.isLoginFormDisplayed()
    await loginPage.login(userLogin,userPass)
  }, defaultTimeout)
})