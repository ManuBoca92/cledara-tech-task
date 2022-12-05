import { productPageSelectors } from "./selectors"

export const clickAddToBag = () => {
    cy.get(productPageSelectors.addToCartButton).click()
}

export const hoverOnCartIcon = () => {
    cy.get(productPageSelectors.cartIcon).invoke('show')
}