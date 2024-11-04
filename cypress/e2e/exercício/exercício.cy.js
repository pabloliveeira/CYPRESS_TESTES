/// <reference types="cypress" />

describe('Testar Agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Testando adição de contato', () => {
        cy.get('[type="text"]').type('Pablo Oliveira')
        cy.get('[type="email"]').type('pablo@teste.com')
        cy.get('[type="tel"]').type('(37) 99999-9999')
        cy.get('.adicionar').click()
        cy.get('[type="text"]').type('Luana Torquato')
        cy.get('[type="email"]').type('luana@teste.com')
        cy.get('[type="tel"]').type('(00) 111111-9999')
        cy.get('.adicionar').click()
    })
    it('Testando edição de contatos', () => {
        cy.get('.edit').first().click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Annye Camargos')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('annye@teste.com')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('(00) 99999-0000')
        cy.get('.alterar').click()
    })
    it('Testando remoção de contato', () => {
        cy.get('.delete').first().click()
    })
})