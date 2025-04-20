import AbstractPage from "./AbstractPage";

class LoginPage extends AbstractPage{

    public get loginForm() {
        return $('#login_form');
    }

    public get userNameInput() {
        return $('#user_login');
    }

    public get passwordInput() {
        return $('#user_password');
    }

    public get signInButton() {
        return $('input[type="submit"]');
    }

    public get errorMessage() {
        return $('.alert-error');
    }

    public async assertLoginPageIsVisible() {
        await this.loginForm.waitForDisplayed();
    }

    public async assertLoginPageErrorMesssage() {
        await expect(this.errorMessage).toBeDisplayed();   
    }

    public async login(username: string, password: string) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.signInButton.click();
    }
}

export default new LoginPage();