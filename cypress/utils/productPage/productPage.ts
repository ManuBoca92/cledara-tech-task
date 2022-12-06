import { productPageSelectors } from './selectors';

export const clickAddToBasket = (): void => {
  cy.get(productPageSelectors.addToCartButton).click();
};

export const getProductPrice = (): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.get(productPageSelectors.productPrice);
};
