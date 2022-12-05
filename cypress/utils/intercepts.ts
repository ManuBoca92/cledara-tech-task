export const interceptRequest = (): any => {
    return cy.intercept('https://gfbd8494-tc3e-mcf3.asos.com/g/collect?v=2*');
}