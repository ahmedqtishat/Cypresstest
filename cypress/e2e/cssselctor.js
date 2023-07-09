///<reference types = "cypress"/>
describe('', () => {
    it('Magento ', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
       
    
        // cy.contains ('a[class="ui-corner-all"]', 'Bags').click({force: true})    
        // cy.get('#ui-id-25').click({force: true})       
        // cy.get('a[href*="https://magento.softwaretestingboard.com/gear/bags.html"]').click({force:true})
    //    cy.get('li[class="level2 nav-3-1-2 category-item ui-menu-item"]').contains('Tees').click({force:true})
       cy.get('li[class="level0 nav-3 category-item level-top parent ui-menu-item"] ').contains('Jackets').click({force:true})
    });
});