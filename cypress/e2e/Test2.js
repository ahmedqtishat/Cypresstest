///<reference types = "cypress"/>
describe("inspect items and understands chain commands", () => {
    it("test by using text ", () => {
      cy.visit("https://www.automationteststore.com");
  
      
          cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click().then(function(element){cy.log(element.text()+" has been clicked") })
          cy.get('a[href="https://automationteststore.com/index.php?rt=content/sitemap"]').click().then(function(element){cy.log(element.text()+" has been clicked") })
          cy.get('.nav-pills > :nth-child(1) > .active').click().then(function(element){cy.log(element.text()+"  all elemnt has been clicked") })
        });

        it.only('Test the Thumplins', () => {
          cy.visit("https://www.automationteststore.com");
          cy.get(".footerlinks").contains("Contact Us").click().then(function(AA){
            cy.log(AA.text()+ " HAS BEEN Clicked")
          // cy.get('div.footerlinks').find('.href').eq(3).click().then((element)=>{
          //   console.log(element.text()+" all elemnt has been clicked")
          //   cy.log(element.text()+" all elemnt has been clicked")

          })
          
        });

    });
    