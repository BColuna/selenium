import WebDriver from "./WebDriver.js";

class Login extends WebDriver{
    userField = By.id('user-name');
    passwordField = By.id('password');
    loginButton = By.id('login-button');

    async openPage(){
        this.driver.get('https://www.saucedemo.com/');
    }
 
    async logIn (user, pass) {
        await this.driver.findElement(this.userField).sendKeys(user);
        await this.driver.findElement(this.passwordField).sendKeys(pass);
        await this.driver.findElement(this.loginButton).click();
    }
}

export default new Login();