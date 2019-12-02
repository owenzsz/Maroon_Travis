describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it('opens', ()=>{
        cy.visit ('/');
        cy.get('[data-cy=button]').should('contain', 'Search');
    });
  });