describe('txt2 spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="txt2"]').contains('Text 2');
  });
});
