describe(' Adicionar produtos no carrinho', () => {
  it('Teste de adicção ao carrinho', () => {
     // Acessar a página para login
     cy.visit('https://www.saucedemo.com/');

     // informar usuário e senha
     cy.get('#user-name').type('standard_user');
     cy.get('#password').type('secret_sauce');
 
     // Clicar no botão de login
     cy.get('#login-button').click();

   // Verificar se login foi realizado e redirecionar para a página inicial(produtos)
    cy.url().should('include', '/inventory.html');

    // Adicionar ao carrinho
    cy.get('.inventory_item')
      .first()
      .find('.btn_primary')
      .click();

    // Conferir quantidade
    cy.get('.shopping_cart_badge').should('have.text', '1');

    // Visite a página do carrinho
    cy.get('.shopping_cart_link').click();

    // Validar resumo
    cy.get('.cart_item').should('have.length', 1);

    // Não há limite de itens para o carrinho
  });
});
