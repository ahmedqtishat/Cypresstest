/// <reference types= "Cypress"/>
describe('log in and firt three item', () => {
    it('', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        
let expected = 6
        for (let i=0; i<expected;i++ ) {
         
           
           if (i%2==1){
            cy.get('div#inventory_container').find('.btn').eq(i).click()
           }
        
        }
    });
});