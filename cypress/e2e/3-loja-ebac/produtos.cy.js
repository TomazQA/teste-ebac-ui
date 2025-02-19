/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    })

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
            .contains('Atlas Fitness Tank')
            .click()

        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    })

})