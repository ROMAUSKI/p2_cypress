
describe('Finalização de Compra', () => {
    it('Validar finalização da compra', () => {

      // Acessar a página para login
      cy.visit('https://www.saucedemo.com/');

      // informar usuário e senha
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
  
      // Clicar no botão de login
      cy.get('#login-button').click();
 
    
     cy.url().should('include', '/inventory.html');

      // Adicione um produto ao carrinho
      cy.get('.inventory_item')
        .first()
        .find('.btn_primary')
        .click();
  
      // Vá para o carrinho
      cy.get('.shopping_cart_link').click();
  
      // Prossiga para o checkout
      cy.get('.checkout_button').click();
  
      // Preencha os detalhes de entrega 
      cy.get('#first-name').type('Elon');
      cy.get('#last-name').type('Musk');
      cy.get('#postal-code').type('99999');
      // Seguinte
      cy.get('#continue').click();
      //Finalizar Resumo
      cy.get('#finish').click();
  
    });
  });
  