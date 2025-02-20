/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da Conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.login('enrico.teste@teste.com.br', 'teste123')

    })

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Enrico', 'Alencar', 'enrico.qa')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })

})