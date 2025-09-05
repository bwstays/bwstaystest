import HomePage from "../pages/HomePage"
import TopBar from "../pages/components/TopBar"
import LoginPage from "../pages/LoginPage"
import FeedbackPage from "../pages/FeedBackPage"
import {userLogin, userPass, defaultTimeout} from "../pages/constants/constants"

describe("example", () => {
  let homepage
  let topbar
  const loginPage = new LoginPage()
  const feedbackPage = new FeedbackPage()

  beforeAll(async () => {
    jest.setTimeout(() => {
    }, defaultTimeout);

    homepage = new HomePage()
    topbar = new TopBar()
  })

  it("Homepage should work", async () => {
    await homepage.visit()
  })

  it("Navbar should be displayed", async () => {
    await homepage.isNavbarDisplayed()
    await topbar.isTopBarDisplayed()
  })

  it("Try to login", async () => {
    await loginPage.visit()
    await loginPage.isLoginFormDisplayed()
    await loginPage.login(userLogin, userPass)
    await loginPage.wait(5000)
  }, defaultTimeout)

  it("Feedback should work", async () => {
    await feedbackPage.visit()
    await feedbackPage.isFeedbackFormDisplayed()
    await feedbackPage.submitFeedback(
      "Jon",
      "jon.dilly@mail.com",
      "subject",
      "testing"
    )
    await feedbackPage.wait(5000)
  }, defaultTimeout)
})