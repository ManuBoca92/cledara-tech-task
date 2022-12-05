import {interceptRequest} from '../utils/intercepts'
import { clickAddToBag, hoverOnCartIcon } from '../utils/productPage/productPage';


describe("Checkout Flow Tests on Asos", () => {
    before('prepares environment', () => {
        cy.setCookie('OptanonAlertBoxClosed', 'true');
    })

    it('testing', ()=> {
        interceptRequest().as('page');
        // cy.interceptPageRequest().as('page');
        cy.visit('https://www.asos.com/asos-design/asos-design-embellished-mini-bandeau-dress-with-diamante-and-disc-sequin-detail-in-silver/prd/203207307?clr=silver&colourWayId=203207309&cid=13504')

        cy.wait('@page');
        // click on size dropdown
        cy.get('[data-testid="colour-size-select"]').click({force: true});
        cy.get('select').select('UK 6')
         
        // click on add to cart buttton
        clickAddToBag()

        // hover on add to cart
        hoverOnCartIcon();
        cy.wait(3000);
    })

    it.skip('user goes to product page', () => {
        cy.visit('/');
        // select shop men
        /* TODO select random gender*/
        cy.get('a[class="mu__cta"]').eq(0).click();

        // Go to shopping page
        cy.get('a[class="hero__muLink"]').click();

        // TODO select a random product
        cy.interceptPageRequest().as('page');
        cy.get('[data-auto-id="productTile"]').first().click();

        cy.wait('@page');
        cy.get('[data-testid="colour-size-select"]').as('productSize')

        if (cy.get('@productSize').should('have.css', 'display')) {
            console.log('There is a product size for product >>')
            cy.get('@productSize').click()
        } else {
            console.log('No product size for product >>')
        }
        cy.wait(3000);
    })
})