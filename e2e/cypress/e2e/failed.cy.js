describe('failed spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="txt5"]').contains('Text');
  });
});
