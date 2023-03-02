describe('txt spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="txt"]').contains('Text');
  });
});
