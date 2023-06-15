import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

class WebDriver {
    driver = new Builder().forBrowser('chrome').build();

    quit(){
        this.driver.quit();
    }
}

export default new WebDriver();