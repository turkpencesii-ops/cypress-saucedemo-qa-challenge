describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("should login successfully with valid credentials", () => {
    cy.fixture("users").then((user) => {
      cy.login(user.validUser.username, user.validUser.password);
    });

    cy.url().should("include", "/inventory");
  });

  it("should show error with invalid credentials", () => {
    cy.fixture("users").then((user) => {
      cy.login(user.invalidUser.username, user.invalidUser.password);
    });

    cy.get('[data-test="error"]').should("be.visible");
  });
});
