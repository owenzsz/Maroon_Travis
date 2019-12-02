describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it('tests button text on the first page', ()=>{
        cy.visit ('/');
        cy.get('[data-cy=button]').should('contain', 'Search');
    });
    it('shows doctors in San Francisco', () => {
        cy.visit ('/');
        cy.get('[data-cy=button]').click();
        cy.get('[data-cy=docname]').should('contain' ,'Stanley Leong');
      });
  });