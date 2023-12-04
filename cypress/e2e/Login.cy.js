describe('Teste de Login no SauceDemo', () => {
  it('Realizar Login com sucesso', () => {
    // Acessar a página para login
    cy.visit('https://www.saucedemo.com/');

    // informar usuário e senha
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Clicar no botão de login
    cy.get('#login-button').click();

    // Verificar se login foi realizado e redirecionar para a página inicial
    cy.url().should('include', '/inventory.html');

    // Validar nome de usuário
    cy.get('.title').should('contain', 'Products');
  });

  // Adicionar mais testes
});
