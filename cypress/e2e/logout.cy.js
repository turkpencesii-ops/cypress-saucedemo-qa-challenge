describe('Logout Test', () => {
  beforeEach(function () {
    cy.visit('https://www.saucedemo.com/')
    cy.fixture('users').as('users')
  })

  it('should logout successfully', function () {
    cy.login(this.users.validUser.username, this.users.validUser.password)
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })
})