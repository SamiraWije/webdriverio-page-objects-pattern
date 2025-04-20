import FeedbackPage from "../pageobjects/FeedbackPage"
import HomePage from "../pageobjects/HomePage"
import LoginPage from "../pageobjects/LoginPage"
import Navbar from "../pageobjects/components/Navbar"


describe("Login Test", () => {
    it("Should not loggin with the invalid username and password", async () => {
        await HomePage.visit()
        await Navbar.clickSignInButton()
        await LoginPage.assertLoginPageIsVisible()
        await LoginPage.login("invalidUser", "invalidPassword")
        await LoginPage.assertLoginPageErrorMesssage()
        // await browser.pause(3000)
        await LoginPage.waitForSeconds(3)
    })

    it("Should Login with the valid username and password", async () => {
        await HomePage.visit()
        await Navbar.clickSignInButton()
        await LoginPage.assertLoginPageIsVisible()
        await LoginPage.login("username", "password")
        // await browser.pause(3000)
        await LoginPage.waitForSeconds(3)

    })
})

describe("Feedback Test", () => {
    it("Should send feedback", async () => {
        await HomePage.visit()
        await HomePage.clickFeedbackButton()
        await FeedbackPage.submitFeedback('test', 'test@test.com', 'test subject', 'test comment')
        await FeedbackPage.assertFeedbackSuccessMessage()
        // await browser.pause(3000)
        await FeedbackPage.waitForSeconds(3)
    })
})
