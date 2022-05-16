context('Basic', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('basic nav', () => {
    cy.url().should('eq', 'http://localhost:3000/');

    cy.contains('Hi Am Youness').should('exist');
  });
});
