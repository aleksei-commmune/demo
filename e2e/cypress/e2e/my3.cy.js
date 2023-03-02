describe('txt3 spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="txt3"]').contains('Text 3');
  });
});
