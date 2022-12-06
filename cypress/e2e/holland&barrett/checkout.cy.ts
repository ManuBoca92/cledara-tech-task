import { interceptRequest } from '../../utils/intercepts';
import { clickOnRandomProductCard } from '../../utils/catalogPage/catalogPage';
import {
  clickCartIcon,
  getProductPriceFromBasket,
  getTotalPrice
} from '../../utils/basket/basket';
import {
  clickAddToBasket,
  getProductPrice
} from '../../utils/productPage/productPage';

describe('Checkout Flow Tests on Holland & Barrett', () => {
  before('prepares environment', () => {
    const event = new Date();
    cy.setCookie('OptanonAlertBoxClosed', event.toISOString());
    cy.setCookie('hbi-cookie-consent', 'ALL');
  });

  it('checkout product from vitamins and supplements page', () => {
    interceptRequest().as('page');
    cy.visit('/shop/vitamins-supplements/vitamins-supplements-shop-all/');

    cy.wait('@page');

    // click on a product
    clickOnRandomProductCard();
    cy.wait('@page');

    getProductPrice()
      .invoke('text')
      .then((priceInProductPage) => {
        clickAddToBasket();

        // click on basket icon
        clickCartIcon();
        cy.wait('@page');

        // verify that product price displayed in cart matches price in product page
        getProductPriceFromBasket().should('have.text', priceInProductPage);
      });

    // verify that total price is displayed in basket
    getTotalPrice().should('be.visible');
  });
});
