///<reference types = "cypress"/>
describe('', () => {


    it.skip('click on unvisble gaer', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        
        
        cy.get('#ui-id-25').click({force: true})
    });
       


    it.only('find all elemnt in men section and selcet the first elemnt', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('li[class=" category-item level-top parent ui-menu-item"] ').contains('Hoodies').click({force:true})
        // cy.get(".product-item-info").each((elemnt,index,list)=>{
        //     if (elemnt.text().includes("Marco")){
        //         cy.wrap(elemnt).click()
        //     }
        // })
        cy.get(".product-item-info").as('items')
        cy.get('@items').find('.price-box').each((elemnt,index,list)=>{
            cy.log("the"+elemnt.text()+"is located index #"+index)
        })
     

        cy.get("#limiter").wait(5000).select('36', {force: true}).then(()=>{

            cy.get(".product-item-info").as('items')
            cy.get('@items').find('.price').invoke('text').as("itemprice")
            cy.get('@itemprice').then((pricetext)=>{
               let total=0
               let mylistprice = pricetext.split("$")
               for(let i=0 ; i<mylistprice.length;i++)
               {
                cy.log(mylistprice[i])
                total+=Number(mylistprice[i]); 
               }
               cy.log(total+ "this is the total ")


    // Make sure the items is 13 as expected
            //    cy.get('@items').should('have.length.of.at.most', 13)
                //  cy.get('@items').should('have.length', 13)
               
           

        })
      })
    });
    it.skip('Test the bags', () => {

       cy.visit("https://magento.softwaretestingboard.com/gear/bags.html") 
       
       cy.get("#limiter").wait(5000).select('36', {force: true}).then(()=>{

        cy.get(".product-item-info").as('items')
        cy.get('@items').find('.price').invoke('text').as("itemprice")
        cy.get('@itemprice').then((pricetext)=>{
           let total=0
           let mylistprice = pricetext.split("$")
           for(let i=0 ; i<mylistprice.length;i++)
           {
            cy.log(mylistprice[i])
            total+=Number(mylistprice[i]); 
           }
           cy.log(total+ " this is the total ")
           
       cy.get('@items').should('have.length.of.at.most', 14)
       
        })
    });

});})