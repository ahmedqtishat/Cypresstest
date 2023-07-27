///<reference types = "cypress"/>
describe("create random user INFO for Sgin-UP", () => {
  it("create", () => {
    let Firstnamelist = ["ahmed", "ali", "anas"];
    let Randomindexforfirstname = Math.floor(
      Math.random() * Firstnamelist.length
    );
    let LastNameList = ["Qtishat", "ALnjdawe", "Alawamleh"];
    let RandomindexforLastname = Math.floor(
      Math.random() * LastNameList.length
    );
    function generateRandomPasswordString(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      return Array.from({ length }, () =>
        characters.charAt(Math.floor(Math.random() * characters.length))
      ).join("");
    }
    let Randominexforemail = Math.floor(Math.random() * 5000).toString();
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
    cy.get("#firstname").type(Firstnamelist[Randomindexforfirstname]);
    cy.get("#lastname").type(LastNameList[RandomindexforLastname]);
    let EmailADDress =
      Firstnamelist[Randomindexforfirstname] +
      "." +
      LastNameList[RandomindexforLastname] +
      Randominexforemail +
      "@gmail.com";
    cy.get("#email_address").type(EmailADDress);
    let Password = generateRandomPasswordString(10);
    let confirmpassword = Password;
    cy.get("#password").type(Password);
    cy.get("#password-confirmation").type(confirmpassword);
    cy.get(
      "#form-validate > .actions-toolbar > div.primary > .action > span"
    ).click();
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/logout/"
    );
    let sgininEmail = EmailADDress;
    let signinPassword = Password;

    cy.get(".panel > .header > .authorization-link > a").click();
    cy.get("#email").type(sgininEmail);
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
    ).type(signinPassword);
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span"
    ).click();
  });
});
