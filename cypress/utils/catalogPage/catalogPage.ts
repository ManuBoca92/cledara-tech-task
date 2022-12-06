
import { catalogPageSelectors } from './selectors';

export const clickOnRandomProductCard = (): void => {
  cy.get(catalogPageSelectors.productCard)
    .should('have.length.gt', 3)
    .then(elements => {
      const items = elements.toArray();
      const item = items[Cypress._.random(items.length - 1)];
      cy.wrap(item).click();
    });
};
 