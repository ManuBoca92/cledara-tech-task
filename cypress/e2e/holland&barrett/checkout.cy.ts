import {
  interceptRequest,
  interceptOptimizelyRequest
} from '../../utils/intercepts';
import { clickOnRandomProductCard } from '../../utils/catalogPage/catalogPage';
import {
  clickCartIcon,
  getProductPriceFromBasket,
  getTotalPrice,
  getBasketCount
} from '../../utils/basket/basket';
import {
  clickAddToBasket,
  getProductPrice,
  getProductTitle
} from '../../utils/productPage/productPage';

describe('Checkout Flow Tests on Holland & Barrett', () => {
  beforeEach('', () => {
    cy.addCookies();
    interceptRequest().as('page');
    cy.visit('/shop/vitamins-supplements/vitamins-supplements-shop-all/');
    cy.wait('@page');
  });

  it('verify that a user can add a product to cart', function () {
    clickOnRandomProductCard();

    interceptOptimizelyRequest().as('event');
    clickAddToBasket();
    cy.wait('@event');

    // verify product has been added to cart
    getBasketCount().should('be.visible');
  });

  it('verify that a product added to basket exists in cart', function () {
    clickOnRandomProductCard();

    getProductTitle()
      .invoke('text')
      .then((productTitle) => {
        clickAddToBasket();
        clickCartIcon();

        // verify that user is in checkout page
        cy.url().should('include', '/basket');

        // verify that product exists is checkout page
        cy.contains(productTitle).should('be.visible');
      });
  });

  it('checkout a random product from vitamins and supplements page', function () {
    clickOnRandomProductCard();

    getProductPrice()
      .invoke('text')
      .then((priceInProductPage) => {
        clickAddToBasket();
        clickCartIcon();

        // verify that product price displayed in cart matches price in product page
        getProductPriceFromBasket().should('have.text', priceInProductPage);
      });

    // verify that total price is displayed in basket
    getTotalPrice().should('be.visible');
  });
});
