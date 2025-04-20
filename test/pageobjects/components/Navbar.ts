class Navbar{

    public get signInButton() {
        return $('#signin_button');
    }

    public async clickSignInButton() {
        await this.signInButton.click();
    }
}

export default new Navbar();