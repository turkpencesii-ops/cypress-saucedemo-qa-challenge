describe("Cart Tests", () => {

  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");

    cy.fixture("users").then((user) => {
      cy.login(user.validUser.username, user.validUser.password);
    });
  });

  it("should add product to cart and validate it in cart page", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should("contain", "1");

    cy.get('.shopping_cart_link').click();
    cy.get('.inventory_item_name').should("contain", "Sauce Labs Backpack");
  });

  it("should remove product from cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.cart_item').should("not.exist");
  });

});