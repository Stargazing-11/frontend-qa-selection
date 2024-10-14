describe("Login Test", () => {
  beforeEach(() => {
    // Visit the main page where the login popup can be triggered
    cy.visit("/"); // Replace '/' with the actual page where the login popup is accessible
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Show take the user to registration page when the user doesn't exist", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://localhost:3000/");
    cy.get(".group > .relative").click();
    cy.get(".px-4 > .group > .h-full").clear("te");
    cy.get(".px-4 > .group > .h-full").type("test1@example.com");
    cy.get(".px-4 > .overflow-hidden").click();
    cy.get(".next-icon").should("have.text", " Back to Log in ");
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("show invalid email", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".group > .relative").click({ force: true });
    cy.get(".px-4 > .group > .h-full").clear("in");
    cy.get(".px-4 > .group > .h-full").type("invalid-email");
    cy.get(".px-4 > .overflow-hidden > .relative").click({ force: true });
    cy.get(".px-4 > .text-xs").should("be.visible");
    /* ==== End Cypress Studio ==== */
  });
});
