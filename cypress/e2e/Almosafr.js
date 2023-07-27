Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

///<reference types = "cypress"/>
describe("Test the Almosafer site", () => {
  it.skip("Vist the website for almosafer", () => {
    cy.visit("https://almosafer.com/en");
    cy.get("html").should("have.attr", "lang", "en"); // assersion for default Languegs en

    cy.get('[data-testid="Header__CurrencySelector"]').should(
      "have.text",
      "SAR "
    ); //assersion for default currency
    cy.get(".sc-dRFtgE").should("have.text", "+966554400000"); //  assersion for contact Number

    cy.get(".sc-ghsgMZ").should("be.visible");

    cy.get("a[class='nav-item nav-link active']")
      .eq(0)
      .invoke("text")
      .should("include", "Flights");

    // Get the current date and calculate "today + 1 day"
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const tomorrow = today.toISOString().slice(0, 10); // Convert to 'YYYY-MM-DD' format

    // Get the default departure date from the date picker
    cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-hcnlBt')
      .invoke("val")
      .then((defaultDepartureDate) => {
        // Perform the assertion
        expect(defaultDepartureDate).to.not.equal(tomorrow);
      });
  });

  it("Switch to hotel search tab ", () => {
    const Website = ["https://almosafer.com/ar", "https://almosafer.com/en"];
    const RandomIndex = Math.floor(Math.random() * Website.length);

    cy.visit(Website[RandomIndex]);
    const InputArabic = ["جدة", "دبي"];
    const InputEnglish = ["Dubai", "Riyadeh", "Jeddah"];
    let RandomIndexArabic = Math.floor(Math.random() * InputArabic.length);
    let RandomIndexEnglish = Math.floor(Math.random() * InputEnglish.length);
    cy.get("#uncontrolled-tab-example-tab-hotels").click()
   cy.url().then((url)=>{
    if(url.includes('ar')){
      cy.get('[data-testid="AutoCompleteInput"]').type(InputArabic[RandomIndexArabic]).then(()=>{
        cy.get('[data-testid="AutoCompleteResultsList"]').first().click();
        cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()
      })


    }
    else if (url.includes('en')){
      cy.get('[data-testid="AutoCompleteInput"]').type(InputEnglish[RandomIndexEnglish])
      cy.get('[data-testid="AutoCompleteResultsList"]').first().click();
      cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()

    }
   })
  });
});
