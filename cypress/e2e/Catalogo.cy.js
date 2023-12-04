describe('Catálogo de Produtos', () => {
    it('Verificar catálogo de produtos e busca de produtos', () => {
    // Acessar a página para login
    cy.visit('https://www.saucedemo.com/');
  
    // informar usuário e senha
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Clicar no botão de login
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');


      // Validar listagem de produtos
      cy.get('#inventory_container').should('have.length.greaterThan', 0);
  
      // Verificar se as informações dos produtos estão corretas
      cy.get('#inventory_container')
        .each(($product) => {
          const productName = $product.find('.inventory_item_name').text();
          const productPrice = $product.find('.inventory_item_description > .pricebar > .inventory_item_price').text();
  
          // Validar se nome está sendo apresentado
          expect(productName).to.not.be.empty;
        });
      //Validar lista de produtos
      cy.get('.inventory_list')
        .each(($product) => {
          const productName = $product.find('#inventory_container_name').text();
  
        });
    });
  });
  