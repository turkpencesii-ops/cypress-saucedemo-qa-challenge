describe("Cart Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");

    cy.fixture("users").then((user) => {
      cy.login(user.validUser.username, user.validUser.password);
    });
  });

  it("should add product to cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should("contain", "1");
  });

  it("should remove product from cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should("not.exist");
  });
});
