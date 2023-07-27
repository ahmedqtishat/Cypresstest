Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })


describe('Alert,Confirm,Prompt', () => {

it('Check the Alert', () => {

    cy.visit('https://demo.automationtesting.in/Alerts.html')

    cy.get('#OKTab > .btn').click()
    cy.on('window:alert',(Msg)=>{
        expect(Msg).to.eql('I am an alert box!')

    })
    
    
});
it('Check the Confirm box', () => {
    cy.visit('https://demo.automationtesting.in/Alerts.html')
    cy.get('#CancelTab > .btn').click()
    
    cy.on('window:confirm', (str) => {
        expect(str).to.equal(`Press a Button !`)
    
    })
    cy.on('window:confirm', () => true)
    cy.get('#demo').should('have.text', 'You pressed Ok')

    cy.on('window:confirm', () => false)
    cy.get('#demo').should('have.text', 'You Pressed Cancel'    )
    
});

it.only('Check Prompt ', () => {

    cy.visit('https://demo.automationtesting.in/Alerts.html')
    cy.window().then(($win) => {
        cy.stub($win, 'prompt').returns('Abo qteesh almo7tarem')
        cy.get('#Textbox > .btn').click()
    
    })
    cy.get('#demo1').contains('Abo')
    cy.get('#demo1').should('have.text', 'Hello Abo qteesh almo7tarem How are you today')
    
});
    
});