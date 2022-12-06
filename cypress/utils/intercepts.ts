/* I am using "cy.intercept" to spy on certain requests that are called during page load.
This is to make sure a page is fully loaded before I perform any actions on it,
which gaurantees us a non flakey tests that can run on either fast or slow internet speeds,
and on local or CI envs.
*/

export const interceptRequest = (): any => {
  return cy.intercept(
    'https://www.hollandandbarrett.com/api/p13n-recs/categories?*'
  );
};
