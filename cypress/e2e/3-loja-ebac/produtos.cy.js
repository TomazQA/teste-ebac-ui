/// <reference types="cypress" />
import produtosPage from '../../support/page-objects/produtos.page'

//import { it } from "mocha"

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    })

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    })

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    })

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')

    })

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        //cy.get('.button-variable-item-XS').click()
        //cy.get('.button-variable-item-Blue').click()
        //cy.get('.plus').click()
        //cy.get('.single_add_to_cart_button').click()
        produtosPage.addProdutoCarrinho('M', 'Brown', qtd)
        cy.get('.woocommerce-message').should('contain', `${qtd} × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.`)

        //cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
    })

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)

        })


        //produtosPage.buscarProduto('Aero Daily Fitness Tee')

        //produtosPage.addProdutoCarrinho('M', 'Brown', qtd)
        //cy.get('.woocommerce-message').should('contain', `${qtd} × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.`)

        //cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
    })
})