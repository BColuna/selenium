import WebDriver from "./WebDriver.js";

class Products extends WebDriver{
    shoppingCartButton = By.id('shopping_cart_container');

    async waitPageLoad(){
        await this.driver.wait(() => documentInitialised(), 5000);
    }

    async openPage(){
        this.driver.get('https://www.saucedemo.com/inventory.html/');
    }

    async openCart(){
        this.driver.findElement(this.shoppingCartButton).click();
    }
 
    async addProductToCart (name) {
        await this.driver.findElement(
            By.id("add-to-cart-" + name.replace(' ', '-').toLowerCase()))
                .click();
    }
}

export default new Products();