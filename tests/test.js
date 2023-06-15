import WebDriver from '../pomObjects/WebDriver.js';
import Login  from '../pomObjects/Login.js';
import Products from '../pomObjects/Products.js';
import Cart from '../pomObjects/Cart.js';

async function test1(){
    Login.logIn('standard_user', 'secret_sauce');

    Products.addProductToCart('Sauce Labs Backpack');
    Products.addProductToCart('Sauce Labs Bolt T-Shirt');
    Products.addProductToCart('Sauce Labs Onesie');

    Products.openCart();

    Cart.assertProducts(['Sauce Labs Backpack','Sauce Labs Bolt T-Shirt'
        ,'Sauce Labs Onesie']);

    WebDriver.quit();
}

test1();