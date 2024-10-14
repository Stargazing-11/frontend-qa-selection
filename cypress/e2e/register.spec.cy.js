describe("Register Template Test", () => {
  beforeEach(() => {
    // Visit the main page where the login popup can be triggered
    cy.visit("/"); // Replace '/' with the actual page where the login popup is accessible
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("should display a 'Minimum 8 characters' error when the password length is less than 8 characters", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".group > .relative").click({ force: true });
    cy.get(".px-4 > .group > .h-full").clear("tes");
    cy.get(".px-4 > .group > .h-full").type("test1@gmai.com");
    cy.get(".px-4 > .group > .h-full").clear("test1@gmai.com");
    cy.get(".px-4 > .group > .h-full").type("test1@gmail.com");
    cy.get(".px-4 > .overflow-hidden > .absolute").click({ force: true });
    cy.get(".border.border-gray-300 > .h-full").click({ force: true });
    cy.get(".border.border-gray-300 > .h-full").type("test");
    cy.get(".mt-2 > .text-xs").should("have.text", "Minimum 8 characters");
    /* ==== End Cypress Studio ==== */
  });

  it("should display a 'Passwords do not match' error when the confirmed password differs from the original", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://localhost:3000/");
    cy.get(".group > .relative").click({ force: true });
    cy.get(".px-4 > .group > .h-full").clear("tes");
    cy.get(".px-4 > .group > .h-full").type("test1@gmail.com");
    cy.get(".px-4 > .overflow-hidden > .absolute").click({ force: true });
    cy.get(".border.border-gray-300 > .h-full").click({ force: true });
    cy.get(".border.border-gray-300 > .h-full").type("Test@1234");
    cy.get(".border-gray-300.mb-6 > .h-full").type("Test");
    cy.get(":nth-child(10) > .text-xs").should(
      "have.text",
      "Passwords do not match"
    );
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("should display a 'Special character required (excluding #)' error when the password lacks a special character", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".group > .relative").click({ force: true });
    cy.get(".px-4 > .group > .h-full").clear("ts");
    cy.get(".px-4 > .group > .h-full").type("test@example.com");
    cy.get(".px-4 > .overflow-hidden > .relative").click({ force: true });
    cy.get(".border.border-gray-300 > .h-full").click({ force: true });
    cy.get(".border.border-gray-300 > .h-full").type("Test12346");
    cy.get(".mt-2 > .text-xs").click();
    cy.get(".mt-2 > .text-xs").should(
      "have.text",
      "Special character required (excluding #)"
    );
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Should register user successfully", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".h-0").click({ force: true });
    cy.get(".px-4 > .group > .h-full").clear("te");
    cy.get(".px-4 > .group > .h-full").type("test@gmail.com");
    cy.get(".px-4 > .overflow-hidden").click({ force: true });
    cy.get(":nth-child(4) > .group > .h-full").clear("S");
    cy.get(":nth-child(4) > .group > .h-full").type("Samuel");
    cy.get(":nth-child(4) > .group > .h-full").clear("Samuel");
    cy.get(":nth-child(4) > .group > .h-full").type("Samuel");
    cy.get(":nth-child(4) > .group > .h-full").clear("T");
    cy.get(":nth-child(4) > .group > .h-full").type("Test");
    cy.get(":nth-child(5) > .group > .h-full").clear();
    cy.get(":nth-child(5) > .group > .h-full").type("User");
    cy.get(".border.border-gray-300 > .h-full").type("Test@1234");
    cy.get(".border-gray-300.mb-6 > .h-full").clear();
    cy.get(".border-gray-300.mb-6 > .h-full").type("Test@1234");
    cy.get(":nth-child(1) > .flex-col").click({ force: true });
    cy.get(".items-center.mb-4 > .gap-2 > .relative").click({ force: true });
    cy.get(".flex-col > .overflow-hidden > .relative").click({ force: true });
    cy.get(".text-4xl").should("be.visible");
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("should disable the 'Enter' button when the name is not provided", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".group > .relative").click();
    cy.get(".pt-8 > .px-4").click();
    cy.get(".px-4 > .group > .h-full").clear("tes");
    cy.get(".px-4 > .group > .h-full").type("test1@example.com");
    cy.get(".px-4 > .overflow-hidden").click();
    cy.get(":nth-child(4) > .group > .h-full").click();
    cy.get(":nth-child(5) > .group > .h-full").clear();
    cy.get(":nth-child(5) > .group > .h-full").type("surname");
    cy.get(".border.border-gray-300 > .h-full").type("Test@1234");
    cy.get(".border-gray-300.mb-6 > .h-full").click();
    cy.get(".border-gray-300.mb-6 > .h-full").type("Test@1234");

    // Assert that the submit button is disabled
    cy.get("[data-cy=submit-button]").should("be.disabled");
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("\"should disable the 'Enter' button when the surname is not provided\"", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".h-0").click({ force: true });
    cy.get(".px-4 > .group > .h-full").clear("tes");
    cy.get(".px-4 > .group > .h-full").type("test1@gmail.com");
    cy.get('[data-cy="submit-button"]').click();
    cy.get(":nth-child(4) > .group > .h-full").clear("te");
    cy.get(":nth-child(4) > .group > .h-full").type("test name");
    cy.get(".border.border-gray-300 > .h-full").type("Test@1234");
    cy.get(".border-gray-300.mb-6 > .h-full").clear();
    cy.get(".border-gray-300.mb-6 > .h-full").type("Test@1234");

    // Assert that the submit button is disabled
    cy.get("[data-cy=submit-button]").should("be.disabled");
    /* ==== End Cypress Studio ==== */
  });
});

/* ==== Test Created with Cypress Studio ==== */

/* ==== Test Created with Cypress Studio ==== */
it("\"should display a 'You must accept the terms and conditions.' ", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  cy.get(".group > .relative").click();
  cy.get(".px-4 > .group > .h-full").clear("te");
  cy.get(".px-4 > .group > .h-full").type("test@example.com");
  cy.get('[data-cy="submit-button"]').click();
  cy.get(":nth-child(4) > .group > .h-full").clear("te");
  cy.get(":nth-child(4) > .group > .h-full").type("test");
  cy.get(":nth-child(5) > .group > .h-full").clear();
  cy.get(":nth-child(5) > .group > .h-full").type("user");
  cy.get(".border.border-gray-300 > .h-full").type("Test@1234");
  cy.get(".border-gray-300.mb-6 > .h-full").clear();
  cy.get(".border-gray-300.mb-6 > .h-full").type("Test@1234");
  cy.get('[data-cy="submit-button"] > .relative').click();
  cy.get(".text-red-500").should(
    "have.text",
    " You must accept the terms and conditions. "
  );
  /* ==== End Cypress Studio ==== */
});
