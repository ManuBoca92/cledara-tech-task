import { basketSelectors } from './selectors';

export const hoverOnCartIcon = (): void => {
  cy.get(basketSelectors.cartIcon).invoke('show');
};

export const clickCartIcon = (): void => {
  cy.get(basketSelectors.cartIcon).first().click();
};

export const getTotalPrice = (): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.get(basketSelectors.totalPrice);
};

export const getProductPriceFromBasket = (): Cypress.Chainable<JQuery<HTMLElement>> => {
  return cy.get(basketSelectors.productPrice);
};
