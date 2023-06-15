import WebDriver from "./WebDriver.js";
import assert from 'assert';

class Cart extends WebDriver{
    cartItemName = By.className('inventory_item_name');

    async waitPageLoad(){
        await this.driver.wait(() => documentInitialised(), 5000);
    }

    async openPage(){
        this.driver.get('https://www.saucedemo.com/cart.html/');
    }
 
    async assertProducts (names) {
        let cartItems = await this.driver.findElements(this.cartItemName);

        this.assert.equal(cartItems.length, names.length);

        for(let i = 0; i++; i < cartItems.length){
            assert.equal(cartItems[i].getText(), names[i].getText());
        }
    }
}

export default new Cart();