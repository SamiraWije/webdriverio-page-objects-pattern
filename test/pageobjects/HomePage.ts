import AbstractPage from "./AbstractPage";

class HomePage extends AbstractPage{
  public get feedbackButton() {
    return $("#feedback");
  }

  public async visit() {
    await browser.url("http://zero.webappsecurity.com/index.html");
  }

  public async clickFeedbackButton() {
    await this.feedbackButton.click();
  }
}

export default new HomePage();
