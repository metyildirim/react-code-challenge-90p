describe("Navigate to Dashboard", () => {
  it("should navigate to the dashboard page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find continue to dashboard button
    cy.get('button:contains("Continue to Dashboard")').click();

    // The new url should include "/dashboard"
    cy.url().should("include", "/dashboard");
  });
});

describe("Navigate to Create User Page", () => {
  it("should navigate to create user page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/dashboard");

    // Find continue to dashboard button
    cy.get('button:contains("Create User")').click();

    // The new url should include "/dashboard/create-user"
    cy.url().should("include", "/dashboard/create-user");
  });
});

export {};
