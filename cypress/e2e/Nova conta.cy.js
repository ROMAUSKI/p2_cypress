describe('Criação de Conta ', () => {
    it('Inclusão de uma conta', () => {
      // Visite a página de registro (assumindo que a URL seja '/register' no seu site)
      cy.visit('https://www.saucedemo.com');
      cy.get('#register-button').click();
      // Preencha os detalhes para criar uma nova conta (adapte conforme necessário)
      cy.get('#first-name').type('Elon');
      cy.get('#last-name').type('Musk');
      cy.get('#postal-code').type('99999');
      cy.get('#register-button').click();
  
      // Verifique se o usuário é redirecionado para a página correta após o registro
      cy.url().should('include', '/inventory.html');
    });
  });
  