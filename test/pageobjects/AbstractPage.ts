export default class AbstractPage{
    public async waitForSeconds(seconds: number) {
        await browser.pause(seconds * 1000)
    }

    //Driver Helpers - Create utility functions such as Set Browser Size and Network Speed
    public async setFullHDResolution(){
        await browser.setWindowSize(1920, 1080);
    }

    public async setNetworkSpeedTo3G() {
        await browser.throttleNetwork('Regular3G');
    }

    public async takeScreenshot(path: string) {
        await browser.saveScreenshot(path);
    }

    //Data Helpers - Generate Random Data
    public async generateRandomNumber(){
        return Math.floor(Math.random() * 1000000 + 1);
    }
}