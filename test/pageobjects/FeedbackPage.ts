import AbstractPage from "./AbstractPage";

class FeedbackPage extends AbstractPage{

    public get nameInput() {
        return $('#name');
    }

    public get emailInput() {
        return $('#email');
    }

    public get subjectInput() {
        return $('#subject');
    }

    public get commentInput() {
        return $('#comment');
    }

    public get submitButton() {
        return $('input[type="submit"]');
    }

    public get successMessage() {
        return $('#feedback-title');
    }

    public async assertFeedbackSuccessMessage() {
        await expect(this.successMessage).toBeDisplayed();
    }

    public async submitFeedback(name: string, email: string, subject: string, comment: string) {
        await this.nameInput.setValue(name);
        await this.emailInput.setValue(email);
        await this.subjectInput.setValue(subject);
        await this.commentInput.setValue(comment);
        await this.submitButton.click();
    }   

}



export default new FeedbackPage();