///<reference types = "cypress"/>
describe('Split first three word from men hodies', () => {
    it('Split first three word seperatly BY EACH', () => {

 
  cy.visit("https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html?product_list_limit=36");
  cy.get('strong[class="product name product-item-name"]').each(($paragraph) => {
    cy.wrap($paragraph).invoke('text').then((text) => {
      const name = text.trim();
      const firstThreeLetters = name.substring(0,3);
      cy.log(firstThreeLetters);
    });
  
  
});

      });
      it(' Split first three word seperatly by FOR LOOP', () => {
        cy.visit("https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html?product_list_limit=36");
        cy.get('strong[class="product name product-item-name"]').invoke('text').then((text)=>{

          const words = text.split(' ');
          for (let i = 0; i < 13; i++) {
            let item = words[i].trim();
            let firstThreeLetters = item.substring(0, 3);
            cy.log(firstThreeLetters);
          }
        })
  
        


     
    
})

it.only('Calculate the discount ', () => {
  cy.visit("https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html?product_list_limit=36");

  cy.get(".product-item-info").as('items')
        cy.get('@items').find('.price').invoke('text').as("itemprice")
  cy.get('@itemprice').then((price)=>{
    let mylistprice = price.split("$")
    let discount= 10
    let total=0
   
    for(let i=0;i<mylistprice.length;i++){
let originalPrice=mylistprice[i]
let dsicountanmount = ( originalPrice * discount)/100
let discountedPrice= ( originalPrice - dsicountanmount)

cy.log(Number(originalPrice)+' This is the price before discount ')

cy.log(Number(discountedPrice)+" This is  the price after discount ")
    }
    // cy.log(Number(discountedPrice))
  
  })
  
});



});