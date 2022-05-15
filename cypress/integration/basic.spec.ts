context('Basic', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('basic nav', () => {
    cy.url().should('eq', 'http://localhost:3000/');

    cy.contains('[Default Layout]').should('exist');

    cy.get('#input')
      .type('Vitesse{Enter}')
      .url()
      .should('eq', 'http://localhost:3000/hi/Vitesse');

    cy.contains('[Default Layout]').should('exist');

    cy.get('[btn]').click().url().should('eq', 'http://localhost:3000/');
  });
});